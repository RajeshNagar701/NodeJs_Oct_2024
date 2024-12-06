
/*
File System & Command line arguments

We can take input from user using command line arguments (process.argv)


node app.js add 

- process.argv is Global object like console 

console.log(process.argv) 

- so we can pass value from command line like what operation we want to perform 
node app.js add

node app raj mahesh nikita nipun  // argument start with 0 index

*/
// Importing the process module
const process = require('process');  

// Printing process.argv property value
console.log(process.argv);


const data=process.argv;

if(data[2]=="raj")
{
	console.log('my name is raj');
}
else if(data[3]=="nikita")
{
	console.log('my name is nikita');
}
else
{
	console.log('not user');
}