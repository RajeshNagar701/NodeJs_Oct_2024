
const express = require('express');
const app = express();

const path = require('path');
var publicpath=path.join(__dirname,'public') // public sudhi no path

app.set('view engine','ejs')

app.get('/',(_,resp)=>{
	
   const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA',
	    Skills:['php','java','python']
    }
	
   resp.render(`${publicpath}/index`,{user});
});

app.get('/about',(_,resp)=>{
   resp.render(`${publicpath}/about`);
});

app.get('/blog',(_,resp)=>{
   resp.render(`${publicpath}/blog`);
});

app.get('/*',(_,resp)=>{
   resp.render(`${publicpath}/pnf`);
});


app.listen(3000);