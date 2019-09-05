const express = require('express');
const multer = require('multer');
const upload = multer({dest: __dirname + '/uploads/images'});
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.post('/upload', upload.array('photo'), (req, res) => {
    if(req.files) {
        res.json(req.files);
    }
    else throw 'error';
});

app.listen(PORT, (req,res) => {
    console.log('Listening at ' + PORT );
});