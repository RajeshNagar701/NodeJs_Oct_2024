
/*

Node.js File System / Crud


1) Read
fs.readFile(fileName [,options], callback)
var data = fs.readFileSync('dummyfile.txt', 'utf8');

2) create & Write  

fs.writeFile('test.txt', 'Hello World!', function (err))

fs.open('TestFile.txt', 'w', function (err, file)

3) update & write 

fs.appendFile('test.txt', 'Hello World!', function (err) 

4) delete

fs.unlink('test.txt', function ())

5) Rename

fs.rename(oldPath, newPath, callback)

*/

const fs = require('fs');


//path Core Module 
const path = require('path');  // folder module
const dirPath= path.join(__dirname,'myDir');  // current crud folder path 
const filePath = `${dirPath}/apple.txt`;


//create file &Write data in myDir folder

/*

fs.writeFileSync(filePath,'this is a simple file',(err)=>{
if(!err) { console.log("file is created"); }
})

*/


// read
/*
 
 fs.readFile(filePath,'utf8',(err,data)=>{
 console.log(data);
})

*/

// update

/*
fs.appendFile(filePath,'for fruits',(err)=>{
if(!err) {
	console.log("file is updated");
	}
})

*/


// rename

/*

fs.rename(filePath, `${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file name is updated")
})

*/  

// Delete 	fs.unlink('test.txt', function ())


fs.unlinkSync(`${dirPath}/fruit.txt`,(err)=>{
if(!err) console.log("file is deleted")
});
