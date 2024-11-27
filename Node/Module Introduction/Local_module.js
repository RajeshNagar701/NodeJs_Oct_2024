
/*

Own Modules or Local Modules

Local modules are modules created locally in your Node.js application.

These modules include different functionalities of your application in 
separate files and folders. 

You can also package it and distribute it via NPM, so that Node.js community can use it.

We need module.exports to define what could be access from other file

*/




exports.mydate=function()
{
	var today=new Date();
	return today.getDate();
}
