// const MongoClient=require("mongodb").MongoClient;

const {MongoClient,ObjectID}=require("mongodb");

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
    if(err){
        console.log("Unable to connect to Mongo DB server");
        return;
    }

    var db=client.db('TodoApp');
    db.collection('Todos').find({
        _id:new ObjectID('5adf65a0e09a520346da8ce1')
    }).toArray().then((docs)=>{
        console.log('Todos');

        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable to load Todos");
    });

    db.collection('Todos').find().count().then((count)=>{
        console.log('Todos');

        console.log("Todos count ",count);
    },(err)=>{
        console.log("Unable to load Todos");
    });
   /* var db=client.db('TodoApp');
    console.log('Connected to MongoDB server');
    db.collection('Todos').insertOne({
        text:'Something to do',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert into Todo ',err);
            
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    });


    db.collection('Users').insertOne({
        name:"Anand Kumar",
        age:25,
        location:"Bangalore"
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert into Todo ',err);
            
        }
        console.log(JSON.stringify(result.ops,undefined,2));
    })*/
    client.close();
})