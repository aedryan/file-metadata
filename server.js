const path = require("path");
const express = require('express');
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use('/favicon.ico', express.static("favicon.ico"));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(app.get('port'), () => {
    console.log("App is running", app.get('port'));
});