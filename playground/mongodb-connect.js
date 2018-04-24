const MongoClient=require("mongodb").MongoClient;

MongoClient.connect('mongodb://localhost:27017/',(err,client)=>{
    if(err){
        console.log("Unable to connect to Mongo DB server");
        return;
    }
    var db=client.db('TodoApp');
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
    })
    client.close();
})