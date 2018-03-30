var express = require('express');
var path = require('path');

app = express();


console.log('HEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');


app.get("/", function(req, res) {
  console.log(res, 'RESRESRESRESRESRSESRS');
  res.sendFile("index.html")
})
