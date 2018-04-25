// const MongoClient=require("mongodb").MongoClient;

const { MongoClient, ObjectID } = require("mongodb");

MongoClient.connect('mongodb://localhost:27017/', (err, client) => {
    if (err) {
        console.log("Unable to connect to Mongo DB server");
        return;
    }

    var db = client.db('TodoApp');
    // Delete Many

    /*    db.collection('Todos').deleteMany({ text: 'Code Node' }).then((result) => {
            console.log(result);
        }, (err) => {
            console.log(err);
        })
    
        */

    // Delete One

    /* db.collection('Todos').deleteOne({ text: 'Code Node' }).then((result) => {
        console.log(result);
    }, (err) => {
        console.log(err);
    }); */

    //findoneanddelete

    /*db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
        console.log(result);
    })*/


    /*db.collection('Users').deleteMany({ name: 'Anand Kumar' }).then((result) => {
        console.log(result);
    })*/

    db.collection('Users').findOneAndDelete({ name: 'Jane Kumar' }).then((result) => {
        console.log(result);
    })

    //client.close();
})