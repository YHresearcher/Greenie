const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

// Configure multer for file uploads, supporting subdirectories
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const customPath = req.body.filename || '';
        const dirParts = customPath.split('/');
        
        // Remove filename from parts to get folder structure
        dirParts.pop(); 
        
        // Construct target directory path inside 'img/'
        const targetDir = path.join(__dirname, 'img', ...dirParts);
        
        // Ensure directory exists recursively
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

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(`Uploaded: ${req.file.filename} to ${req.file.destination}`);
    res.send({ success: true, filename: req.file.filename });
});

app.listen(PORT, () => {
    console.log(`Greenie Admin Server is running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/admin.html in your browser to manage images.`);
});
