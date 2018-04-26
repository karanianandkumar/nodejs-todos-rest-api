const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

var newTodo = new Todo({
    text: 'Cook Dinner'
});

/*newTodo.save().then((document)=>{
    console.log(document);
},(err)=>{
    console.log(err);
});*/
var completeData = new Todo({
    text: 'Something to do'
});
completeData.save().then((result) => {
    console.log(JSON.stringify(result, undefined, 2));
}, (error) => {
    console.log(error);
})


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
});

var newUser = new User({
    email: 'karanianandkumar@gmail.com'
});

newUser.save().then((result) => {
    console.log(result);
}, (err) => {
    console.log(err);
});