var express = require('express');
var app = express();
var config = require('./config');
var database = require('./database');
var fs = require('fs');
var path = require('path');
var app_list = require('./src/applications/app_list');

app_list.forEach(_app => {
  var router = require(path.join(
    __dirname, 'src', 'applications', _app.folder, _app.route));
  app.use(_app.url, router);
});

app.get('/', function(req, res, next){
  res.send("OK!", 200);
})

app.listen(3000, function(){
  console.log("Server is running on localhost:3000");
});
