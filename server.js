const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.static(path.join(__dirname)));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const imgDir = path.join(__dirname, 'img');
        if (!fs.existsSync(imgDir)){
            fs.mkdirSync(imgDir);
        }
        cb(null, imgDir);
    },
    filename: function (req, file, cb) {
        // Use the filename provided by the client, or default to original
        const customName = req.body.filename;
        cb(null, customName || file.originalname);
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('image'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    console.log(`Image updated: ${req.file.filename}`);
    res.send({ success: true, filename: req.file.filename });
});

app.listen(PORT, () => {
    console.log(`Greenie Admin Server is running at http://localhost:${PORT}`);
    console.log(`Open http://localhost:${PORT}/admin.html in your browser to manage images.`);
});
