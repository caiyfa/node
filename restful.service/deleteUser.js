var express = require('express');
var app = express();
var fs = require("fs");

 
var bowser=require("../system/bowser")
app.get('/deleteUser/:id', function (req, res) {
  res.setHeader('Content-Type', 'text/html; charset=utf8');
   // First read existing users.
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       data = JSON.parse( data );
       delete data["user" + req.params.id];
       
       console.log( data );
       res.end( JSON.stringify(data));
   });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
bowser.openDefaultBrowser("http://127.0.0.1:8081/deleteUser/1")