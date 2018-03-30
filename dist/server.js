var express = require('express');
var path = require('path');

app = express();
app.use(serveStatic(path.join(__dirname, 'dist')));




app.get("/", function(req, res) {
  console.log(res, 'RESRESRESRESRESRSESRS');
  res.sendFile("index.html")
})
