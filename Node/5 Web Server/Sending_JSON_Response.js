var http = require('http'); 


/*
const object=[
	{name:'Raj', email:'raj@gmail.com'},
	{name:'nagar', email:'nagar@gmail.com'},
	{name:'nirav', email:'nirav@gmail.com'}
];
*/

const data = require('./data');

var server = http.createServer(function (req, res) {   
   
            res.writeHead(200, { 'Content-Type': 'application/json' });
            //res.write(JSON.stringify({name:'Raj', email:'raj@gmail.com'})); // direct object
			//res.write(JSON.stringify(object));   // object variable
			res.write(JSON.stringify(data));	// object moduole import		
            res.end();  
});

server.listen(5000);

console.log('Node.js web server at port 5000 is running..')