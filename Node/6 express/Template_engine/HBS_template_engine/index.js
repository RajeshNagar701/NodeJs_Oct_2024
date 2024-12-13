
const express=require('express');

const app=express();
const hbs = require('hbs');

app.use(express.static('public'));

app.set('view engine', 'hbs');  // app.set('view engine','ejs')
hbs.registerPartials(__dirname + '/views/partials/')

// 1 static code 

app.get('/send',(_,resp)=>{
    resp.send(`<h1>Hello i am static code </h1>`)
});


// 2  static page call & want path stattic page

const path = require('path');
const publicPath=path.join(__dirname,'public'); 


app.get('/sendFile',(_,resp)=>{
    resp.sendFile(`${publicPath}/demo.html`);
});




// 3 get hbs template page from views  

app.get('/',(_,resp)=>{
    resp.render('index');
});


app.get('/about',(_,resp)=>{
    resp.render('about');
});

app.get('/service',(_,resp)=>{
    resp.render('service');
});

app.get('/contact',(_,resp)=>{
    resp.render('contact');
});

app.get('*',(_,resp)=>{
    resp.render('pnf');
});

app.listen(3000);