var express = require('express'),
    serveStatic = require('serve-static');

var app = express();

app.use(serveStatic("static/"));
app.listen(5000);