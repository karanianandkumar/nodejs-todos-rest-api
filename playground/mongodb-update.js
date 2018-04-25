// const MongoClient=require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        console.log("Unable to connect to Mongo DB server");
        return;
    }

    var db = client.db('TodoApp');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID("5ae041cb87c4f46270b8afd0")
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });


    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5ae03eca87c4f46270b8ae4b")
    }, {
            $set: {
                name: 'Anand Kumar K'
            },
            $inc: {
                age: 4
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        })

    //client.close();
})