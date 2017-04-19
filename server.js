const multer  = require('multer');
const path = require("path");
const express = require('express');
const app = express();
const upload = multer({ dest: '' });

app.set('port', (process.env.PORT || 5000));
app.use('/favicon.ico', express.static("favicon.ico"));
app.use('/app.js', express.static("app.js"));

app.post('/file-size', upload.single('newFile'), (req, res) => {
   res.json({ size: req.file.size });
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
});