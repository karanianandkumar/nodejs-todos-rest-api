const mongoose=require('mongoose');

mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo=mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newTodo=new Todo({
    text:'Cook Dinner'
});

/*newTodo.save().then((document)=>{
    console.log(document);
},(err)=>{
    console.log(err);
});*/
var completeData=new Todo({
    text:'Code tonight',
    completed:false,
    completedAt:new Date()
});
completeData.save().then((result)=>{
    console.log(JSON.stringify(result,undefined,2));
},(error)=>{
    console.log(error);
})