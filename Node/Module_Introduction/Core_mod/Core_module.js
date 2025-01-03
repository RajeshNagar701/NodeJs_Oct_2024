
/*

1) Core / Built-in Modules

Core Modules covers minimum functionality of Node.js
These core modules are compiled into its binary distribution and load automatically when Node.js
process starts
You only need to import the core module first in order to use it in your application
Loading Core Modules


var module = require('module_name');

- Specify module name in the require() function.
- The require() function will return an object, function, 
property or any other JavaScript type,
depending on what the specified module return


Module 				Description
assert				Provides a set of assertion tests
buffer				To handle binary data
child_process		To run a child process
cluster				To split a single Node process into multiple processes
crypto				To handle OpenSSL cryptographic functions
dgram				Provides implementation of UDP datagram sockets
dns					To do DNS lookups and name resolution functions
domain				Deprecated. To handle unhandled errors
events				To handle events
fs					To handle the file system
http				To make Node.js act as an HTTP server
https				To make Node.js act as an HTTPS server.
net					To create servers and clients
os					Provides information about the operation system
path				To handle file paths
punycode			Deprecated. A character encoding scheme
querystring			To handle URL query strings
readline			To handle readable streams one line at the time
stream				To handle streaming data
string_decoder		To decode buffer objects into strings
timers				To execute a function after a given number of milliseconds
tls					To implement TLS and SSL protocols
tty					Provides classes used by a text terminal
url					To parse URL strings
util				To access utility functions
v8					To access information about V8 (the JavaScript engine)
vm					To compile JavaScript code in a virtual machine
zlib				To compress or decompress files




2 Type of Core Module
	
Global 

Which Included already in Node like
console.log() // global already include

Non Global

Which we have to include in Node like

const  fs=require(‘fs’);	

*/



/*

var fs=require('fs');
fs.appendFile('mydemo.txt','Hello my first file ceated by fs core module', ()=>{});

*/



var http = require('http');

http.createServer(function (req, res) {
	
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! sdasdasdas');

}).listen(8080);
