const fs = require('fs');

//path Module
const path = require('path');  // folder module
const dirPath= path.join(__dirname,'public');  // current crud folder path 

//create file in crud folder

for(i=0;i<5;i++)
{
	fs.writeFileSync(`${dirPath}/hello${i}.txt`,"Some simple text in file")
}


