
const dbConnect= require('./conn');


// SELECT ALL USER COLLECTION DATA

const getdata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({}).toArray();
   console.log(result)
}
getdata();


/*
// SELECT SINGLE COLLECTION DATA

const singledata=async ()=>{
   let data = await dbConnect();
   let result = await data.find({'name': 'raj nagar'}).toArray();
   console.log(result)
}
singledata();

*/

/*
// insert COLLECTION DATA

const insertdata=async ()=>{
   let data = await dbConnect();
   let result = await data.insertMany([
          {name:'akash',email:'akash@gmail.com',pass:'1234'},
          {name:'patel',email:'patel@gmail.com',pass:'1234'},
          {name:'mihir',email:'mihir@gmail.com',pass:'1234'}
      ]
	);
	if(result)
	{
		console.log('data inserted success');
	}
}
insertdata();
*/
/*
const updateData=async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        { name:'patel'},
        {
            $set:{name:'patelRaj', email:'patelRaj@gmail.com'}
        }
      )
      console.warn("data is Updated")
}
updateData();
*/

/*
const deleteData=async ()=>{
let data = await dbConnect();
let result = await data.deleteMany({name:'patelRaj'})
console.warn("data is Deleted")
}
 
deleteData();
*/

