

const {MongoClient} = require('mongodb')   // import mongodb 
const url= 'mongodb://localhost:27017'; // mongodb://localhost:27017/
const databaseName='shopping';  // db name

const conn= new MongoClient(url);  


async function getData()
{
    let result = await conn.connect();
    db= result.db(databaseName);
    collection = db.collection('users');
    let data = await collection.find({}).toArray(); // fetch all data
  //let data = await collection.find({name:’Raj’}).toArray(); //fetch name data	
    console.log(data)
}

getData();
