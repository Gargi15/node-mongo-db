var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose.js');
var {Todo} = require('./models/todo.js');
var {user} = require('./models/user.js');

var app = express();
app.use(bodyParser.json());

app.post('/todo', (req,res)=>{
	    var newTodo = new Todo({
		text: req.body.text
	});

	newTodo.save().then((doc)=>{
		console.log('Doc inserted successfully!');
		res.send(doc);
	},
	(err)=>{
		console.log('Error occured: '+err);
		res.status(400).send(err);
	})
	console.log(req.body);
});

app.listen(3000,()=>{
	console.log('Server Started on port 3000...');
});

module.exports = {app};

