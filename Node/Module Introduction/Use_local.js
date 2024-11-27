

var http = require('http'); // loading core module by require()

var local_mod=require('./Local_module') // loading local module by require()

http.createServer(function (req, res) {
	
  res.writeHead(200, {'Content-Type': 'text/html'});  // response
  
  res.write('<h1> My custome/Local/Own Module date is : ' + local_mod.mydate() + "</h1><BR>"); // print
  res.end();  // end write
 
}).listen(8080);