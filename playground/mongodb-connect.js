const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/ToDoApp",(err, db) =>{

	if(err){
		return console.log('Unable to connect to Mongodb Server');
	}

	console.log('Connected to Mongodb Server');
	db.collection('Todos').insertOne({
		text: 'Things to do',
		completed: false


	}, (err,res)=>{
		if(err){
			return console.log('Error in inserting one line to the database',err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));

	});

	db.collection('Users').insertOne({
		name: 'Gargi Biswas',
		age: 25,
		location: 'Hyderabad'



	}, (err,res)=>{
		if(err){
			return console.log('Error in inserting one line to the database Users',err);
		}

		console.log(JSON.stringify(res.ops, undefined, 2));

	});
	db.close();
});

