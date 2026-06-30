const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Configuration File Setup
const CONFIG_PATH = path.join(__dirname, 'config.json');

function hashPassword(password, salt) {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
}

function generateSalt() {
    return crypto.randomBytes(16).toString('hex');
}

let adminConfig = {
    username: 'admin',
    salt: '',
    passwordHash: ''
};

// Load or Initialize Config
if (fs.existsSync(CONFIG_PATH)) {
    try {
        adminConfig = JSON.parse(fs.readFileSync(CONFIG_PATH, 'utf8'));
    } catch (e) {
        console.error('Error reading config.json, resetting to default.', e);
        initializeDefaultConfig();
    }
} else {
    initializeDefaultConfig();
}

function initializeDefaultConfig() {
    const salt = generateSalt();
    adminConfig.salt = salt;
    adminConfig.passwordHash = hashPassword('Greenie2026!', salt);
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(adminConfig, null, 2), 'utf8');
}

// Basic Authentication Middleware using PBKDF2 hash
function requireAuth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
        res.setHeader('WWW-Authenticate', 'Basic realm="Greenie Admin Portal"');
        return res.status(401).send('Authentication required.');
    }

    const auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
    const user = auth[0];
    const pass = auth[1];

    const inputHash = hashPassword(pass, adminConfig.salt);

    if (user === adminConfig.username && inputHash === adminConfig.passwordHash) {
        return next();
    }

    res.setHeader('WWW-Authenticate', 'Basic realm="Greenie Admin Portal"');
    return res.status(401).send('Invalid credentials.');
}

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const customPath = req.body.filename || '';
        const dirParts = customPath.split('/');
        dirParts.pop(); 
        const targetDir = path.join(__dirname, 'img', ...dirParts);
        
        if (!fs.existsSync(targetDir)){
            fs.mkdirSync(targetDir, { recursive: true });
        }
        cb(null, targetDir);
    },
    filename: function (req, file, cb) {
        const customPath = req.body.filename || file.originalname;
        const basename = path.basename(customPath);
        cb(null, basename);
    }
});

const upload = multer({ storage: storage });

// Public static assets (No authentication required)
app.use('/css', express.static(path.join(__dirname, 'css')));
app.use('/js', express.static(path.join(__dirname, 'js')));
app.use('/img', express.static(path.join(__dirname, 'img')));
app.use('/products', express.static(path.join(__dirname, 'products')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Protected Admin Webpage
app.get('/admin.html', requireAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

// Protected Upload API
app.post('/upload', requireAuth, upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(`Uploaded: ${req.file.filename} to ${req.file.destination}`);
    res.send({ success: true, filename: req.file.filename });
});

// Protected Change Password API
app.post('/change-password', requireAuth, (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword) {
        return res.status(400).send('Missing password fields.');
    }

    const currentHash = hashPassword(currentPassword, adminConfig.salt);
    if (currentHash !== adminConfig.passwordHash) {
        return res.status(403).send('Current password is incorrect.');
    }

    const newSalt = generateSalt();
    adminConfig.salt = newSalt;
    adminConfig.passwordHash = hashPassword(newPassword, newSalt);
    
    fs.writeFileSync(CONFIG_PATH, JSON.stringify(adminConfig, null, 2), 'utf8');
    console.log('Password successfully changed.');
    res.send({ success: true, message: 'Password updated. Please log in again.' });
});

app.listen(PORT, () => {
    console.log(`Greenie Admin Server is running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/admin.html to manage images.`);
});
