//require the library epress
var express = require('express');
//create instance of express
var app = express();

//define end point
// app.get('/', function (request, response){
//     //__dirname --> current directory
//     response.sendFile(__dirname + '/public/index.html');
// });
app.get('/tweets/:username', function (request, response) {

});

var server = app.listen(3000,function(){
    console.log("Listening to port %s \n\n",server.address().port);

});

// //import module hello
// var hello = require('./hello.js');
// hello();
// //import module goodbye
// var gb = require('./goodbye.js');
// gb.goodbye();
//
// // require and use module
// // ./ means a local module
// var logger = require('./logger');
// app.use(logger); //logger middleware

/**
 * Using middleware
 */

// //app.use function adds middleware to the application stack
// app.use(express.static('public')); //static middleware serving files from public folder
//
// // next() - reads from top to bottom middlewares
//
// app.get('/blocks', function(request, response) {
// 	var blocks = ['Fixed', 'Movable', 'Rotating'];
// 	response.json(blocks);
// });

/**
 * not using middlewares

app.get('/', function(request, response) {
	response.sendFile(__dirname + '/public/index.html');
});

 */

 /*
 * curl
 */

// var http = require('http');
//
// var options = {
// 	host: 'localhost',
// 	path: 'http://localhost/tests/json.php',
// };
//
// var req = http.get(options, function(res) {
//   console.log('STATUS: ' + res.statusCode);
//   console.log('HEADERS: ' + JSON.stringify(res.headers));
//
//   // Buffer the body entirely for processing as a whole.
//   var bodyChunks = [];
//   res.on('data', function(chunk) {
//     // You can process streamed parts here...
//     bodyChunks.push(chunk);
//   }).on('end', function() {
//     var body = Buffer.concat(bodyChunks);
//     console.log('BODY: ' + body);
//     // ...and/or process the entire body here.
//   })
// });
//
// req.on('error', function(e) {
//   console.log('ERROR: ' + e.message);
// });
 
