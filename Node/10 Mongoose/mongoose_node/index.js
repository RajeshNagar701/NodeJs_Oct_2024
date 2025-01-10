var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');

const express=require('express');
const app=express();
app.use(express.json());


// Schema means table column validation
var usersSchema=mongoose.Schema({
	id:Number,
    name:String,
    email:String,
    password:String
});

// create model/table appy validation on table coumn
const userModel=mongoose.model("users",usersSchema);

// insert data by schema   save();
app.post("/insert", async (req, resp) => {
    let data = new userModel(req.body)
    const result=await data.save();  // save buildin function of mongoose
    resp.send({'success':"Data Inserted success"});
})

// get all data  find(); 
app.get("/get", async (req, resp) => {
    let data = await userModel.find();
    resp.send(data);
})

app.listen(5000);
