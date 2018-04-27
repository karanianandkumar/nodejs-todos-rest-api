const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

var id = '5ae31e92d1298c11182cd0f711';
var userID = "5ae18247c7cb8b18c94e789e";

// if (!ObjectID.isValid(id)) {
//     console.log('ID not valid');
// }


// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log(todos);
// });
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log(todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('NO data');
//     }
//     console.log('TodoByID', todo);
// }).catch((err) => console.log(err));



User.findById(userID).then((user) => {
    if (!user) {
        return console.log('User Not found');
    }
    console.log('USER IS', user);
})

