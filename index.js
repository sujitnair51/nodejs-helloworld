var express = require('express');
app = express();

app.get('/', function (req, res) {
    res.send('This is an updated version of Hello World!');
});

app.listen(8080, function () {
    console.log('node server listening on port 8080!');
});
