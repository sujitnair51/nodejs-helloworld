var express = require('express');
var cors = require('cors')
app = express();

var corsOptions = {
    origin: 'http://localhost:8080',
    optionsSuccessStatus: 200, // For legacy browser support
    methods: "GET, PUT"
}

app.use(cors(corsOptions));
// app.use(cors);

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/', function (req, res) {
    var json = JSON.stringify({ 
        author: "testing", 
        book: "QA"
      });
    res.send(json);
});

app.listen(8080, function () {
    console.log('node server listening on port 8080!');
});
