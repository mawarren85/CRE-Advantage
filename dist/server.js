var express = require('express');
var path = require('path');

app = express();


console.log('HEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
var port = process.env.PORT || 5000;
app.listen(port);

app.get("/", function(req, res) {
  console.log(res, 'RESRESRESRESRESRSESRS');
  res.sendFile("index.html")
})
