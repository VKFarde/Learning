var express = require("Express");
var app = express();

var script = require("./script");

//both index1.js and script.js should be in same directory
app.use("/script", script);

app.listen(3000);
