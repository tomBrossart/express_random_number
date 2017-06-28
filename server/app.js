var express = require("express");
var app = express();
var ranNum = require('./modules/randomNumber.js');

// routes
app.get("/randomNumber", function(req, res) {
  var rN = ranNum(100,100000);
  console.log('request for randomNumber!', rN);
  res.send(rN.toString());
  // res.sendFile(path.join(__dirname, "/public/", file)); // this shouldn't work becuase file is not defined yet
});

// serve static files
var path = require("path");
app.get("/*", function(req, res) { // when there is a request to this url /* then run this function
 console.log('got a request', req.params[0]); // this shows up in terminal

// determine which file to send back
 var file = req.params[0]  ||  "./views/index.html";
// send the file back to the browser
 res.sendFile(path.join(__dirname, "./public/", file));
});


// start up the server
app.listen(5000, function() {
  console.log('listening on the port 5000');
});
