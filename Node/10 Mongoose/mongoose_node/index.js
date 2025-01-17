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
app.post("/insert_user", async (req, resp) => {
    let data = new userModel(req.body)
    const result=await data.save();  // save buildin function of mongoose
    resp.send({'success':"Data Inserted success"});
})


// get all data
app.get("/get_user", async (req, resp) => {
	let result = await userModel.find()
    resp.send(result);
})


// get data by column

app.get("/get_single", async (req, resp) => {
    let data = await userModel.find({name:"prem"});
    resp.send(data);
})


// search data by patern column 
app.get("/serach_user/:key", async (req, resp) => {
 
	//console.log(req.params.key);
	let data = await userModel.find({
		"$or":[
                {name:{$regex:req.params.key}},
				{email:{$regex:req.params.key}}
              ]
	});
    resp.send(data);
})

// update
//put http://localhost:5000/update/637f3ba97f546bbfeae336c3

app.put("/update_user/:_id",async (req, resp) => {
    console.log(req.params)
    let data = await userModel.updateOne(
        req.params,
        {$set: req.body}
    );
    resp.send(data);
})




//delete  http://localhost:5000/delete/637f3ba97f546bbfeae336c3
app.delete("/delete_user/:_id", async (req, resp) => {
    console.log(req.params)
    let data = await userModel.deleteOne(req.params);
    resp.send(data);
})

app.get("/login", async (req, resp) => {
 
	console.log(req.body);
	let data = await userModel.find({
		$and:[{"email":req.body.email},{"password": req.body.password}]
	});
	if(data.length>0)
	{
		resp.send({"msg":"Login success"});	
	}
	else
	{
		resp.send({"msg":"Login Failed due to Wrong Credencial"});	
	}
    
	
})

//===================================================================

// Schema means table column validation
var contactSchema=mongoose.Schema({
	id:Number,
    name:String,
    subject:String,
    comment:String
});

// create model/table appy validation on table coumn
const contactModel=mongoose.model("contacts",contactSchema);


// insert contact data by schema   save();
app.post("/insert_contacts", async (req, resp) => {
    let data = new contactModel(req.body)
    const result=await data.save();  // save buildin function of mongoose
    resp.send({'success':"Contact Inserted success"});
})



app.listen(5000);
