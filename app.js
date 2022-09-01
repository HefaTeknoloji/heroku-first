var express = require('express');
 var bodyParser = require("body-parser");
 var app = express();
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
 app.post("/", function(req, res) {
    let total = parseInt(req.body.num2) + parseInt(req.body.num1);
    console.log('total: '+total.toString());
     res.send(req.body);
    
 });
 app.listen(3000, function () {
     console.log('Example app listening on port 3000!');
 });