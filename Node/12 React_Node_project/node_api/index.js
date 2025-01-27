var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/shopping');


const cors=require('cors');
const express=require('express');
const app=express();
app.use(express.json());
app.use(cors());


// Schema means table column validation
var serviceSchema=mongoose.Schema({
	id:Number,
    ser_name:String,
    ser_description:String,
    ser_image:String,
});

// create model/table appy validation on table coumn
const serviceModel=mongoose.model("service",serviceSchema);



// get all data    http://localhost:5000/get_service
app.get("/get_service", async (req, resp) => {
	let result = await serviceModel.find()
    resp.send(result);
})


// get data by column

app.get("/get_single", async (req, resp) => {
    let data = await serviceModel.find({name:"prem"});
    resp.send(data);
})


// search data by patern column 
app.get("/serach_user/:key", async (req, resp) => {
 
	//console.log(req.params.key);
	let data = await serviceModel.find({
		"$or":[
                {name:{$regex:req.params.key}},
				{email:{$regex:req.params.key}}
              ]
	});
    resp.send(data);
})

// insert data by schema   save();  http://localhost:5000/insert_service
app.post("/insert_service", async (req, resp) => {
    let data = new serviceModel(req.body)
    const result=await data.save();  // save buildin function of mongoose
    resp.send({'success':"Data Inserted success"});
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

/*
app.get("/login1", async (req, resp) => {
	console.log(req.body);
	let data = await userModel.find({
		$and:[{"email":req.body.email},{"password":req.body.password}]
	});
	//resp.send(data);
	if(data.length>0)
	{
		resp.send({'success':"Login success"});
	}
	else
	{
		resp.send({'failed':"Login Failed"});
	}
});
*/
/*
app.get("/login2", async (req, resp) => {
	console.log(req.body);
	let data = await userModel.find({"email":req.body.email});
	//resp.send(data);
	if(data.length>0)
	{
		if(data[0].password==req.body.password)
		{
			
			if(data[0].status=="Unblock")
			{
				resp.send({'success':"Login Success"});
			}
			else
			{
				resp.send({'Failed':"Blocked Account so Contact Company"});
			}
		}
		else
		{
			resp.send({'Failed':"Wrong Password so Login Filed"});
		}
	}
	else
	{
		resp.send({'Failed':"Email Does't Exist so Login Filed"});
	}
	
});

*/

//===================================================================

app.listen(5000);
