const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err, db) =>{

	if(err){
		return console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');
	
	db.collection("Todos").find({Activity: 'Likes to Meow'}).toArray().then((doc)=>{
		console.log('Todos');
		console.log(JSON.stringify(doc,undefined,2));
	},
	(err)=>{
		console.log('Encountered an error while retrieving values from Todos.'+err);
	});
	
	db.close();
});

