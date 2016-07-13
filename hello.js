/**
 * Created by Mesasix on 12/07/2016.
 */

//  var http = require('http');

/**
 * writing to the stream-->response
 */
// http.createServer(function (request, response) {
//     response.writeHead(200);
//     response.write('Hello World! The Dog is running');
//     setTimeout(function () {
//         response.write("The Dog is done");
//         response.end();
//     }, 5000);
// }).listen(8000);
// console.log('Listening to port 8000');

/**
 * we can rewrite the above code as
 */
// var server = http.createServer();
// server.on('request', function (request, response) {
//     response.writeHead(200);
//     response.write('Hello World! The Dog is running \n');
//     setTimeout(function () {
//         response.write("The Dog is done\n");
//         response.end();
//     }, 5000);
// }).listen(8000);
// console.log('Listening to port 8000');

//----------------------------------------------------------------------------------------------------------------//

// var EventEmitter = require('events').EventEmitter;
//
// var logger = new EventEmitter();
//
// //listen for error event
// logger.on('error', function (message) {
//     console.log('ERROR:', message);
// });
//
// logger.emit('error', 'Emit error message!');

//-----------------------------------------------------------------------------------------------------------------//

/**
 * printing to the console the data that we get from the client
 * reading from the request
 * printing the data from the request
 */

// http.createServer(function(request, response){
//     response.writeHead(200);
//
//     //listen to the 'readable' event
//     request.on('readable', function () {
//         var chunk = null;
//
//         //read a chunk from the request
//         while (null !== (chunk = request.read())){
//             //toString - to avoid buffers when facing with binary data
//             //console.log(chunk.toString()); // do not echo back
//             response.write(chunk);//echo back to the client the data that we get from the request, no need for toString()
//         }
//     });
//
//     //listen to end event
//     request.on('end', function () {
//         response.end();
//     });
//
// }).listen(8080);

/**
 * the Shortcut for the above code
 * pipe the two functions above -> 'readable' and 'end' events
 * pipe handles all the event listening and chunk reading behind the scenes
 */
// http.createServer(function(request, response){
//     response.writeHead(200);
//
//     request.pipe(response);
//
// }).listen(8080);

//-----------------------------------------------------------------------------
/*
 * Reading and Writing File
 *
 */

//file system module
// var fs = require('fs');
//
// var file = fs.createReadStream("readme.md");
// var newFile = fs.createWriteStream("readme_copy.md");
//
// file.pipe(newFile);

//-------------------------------------------------------------------------------
/**
 * Upload a File
 * read from the request and pipe it to a file
 */

// var fs = require('fs');
// var http = require('http');
//
// http.createServer(function(request, response){
//     var newFile = fs.createWriteStream("readme_copy.md");
//     request.pipe(newFile);
//
//     request.on('end', function () {
//         response.end('uploaded');
//     });
// }).listen(8080);

//------------------------------------------------------------------------------------
/**
 * Exporting Modules
 */

//private
var hello = function () {
    console.log("Hello There!");
}
//makes it public
module.exports = hello;
