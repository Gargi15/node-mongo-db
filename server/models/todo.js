var mongoose = require('mongoose');

var Todo = mongoose.model('Todo',{
	text: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	},
	complete: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};

// var newTodo = new Todo({
// 	text: 'Cook Mutton Today'
// });



// newTodo.save().then((doc)=>{
// 	console.log('New todo inserted: '+doc);
// },
// (err)=>{
// 	if(err){
// 		console.log('Error occured while inserting new value');
// 	}
// });

