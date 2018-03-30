var express = require('express');
var path = require('path');
var serveStatic = require('serve-static')
app = express();
app.use(serveStatic(path.join(__dirname, 'dist')))

console.log('HEEEEEEEEEEEEYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY');
var port = process.env.PORT || 8080;
app.listen(port);

// app.get("/", function(req, res) {
//   console.log(res, 'RESRESRESRESRESRSESRS');
//   res.sendFile("index.html")
// })
