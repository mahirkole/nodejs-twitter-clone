var express = require('express');
var app = express();
var config = require('./config');
var database = require('./database');
var fs = require('fs');
var path = require('path');



app.get('/', function(req, res, next){
  res.send("OK!", 200);
})

app.listen(3000, function(){
  console.log("Server is running on localhost:3000");
});
