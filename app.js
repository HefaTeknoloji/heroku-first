const http = require('http');

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

 const server = http.createServer((request,response)=>{console.log('istek yollandı'); response.writeHead(200,{'content-type': 'text/html; charset=utf-8'})

 response.write("<b>merhaba</b>   dünya");
 response.end();

});

server.listen(3000);


 app.post("/emre", function(req, res) {
    let total = parseInt(req.body.num2) + parseInt(req.body.num1);
    console.log('total: '+total.toString());
     res.send(req.body);
    
 });
 app.listen(process.env.PORT || 5000, function () {
     console.log('Example app listening on port 3000!');
 });