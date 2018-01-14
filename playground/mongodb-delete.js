const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) =>{

	if(err){
		return console.log('Unable to connect to the server');
	}

	console.log('Connected to the server');

    db.collection('Todos').deleteMany({text: 'eat lunch'}).then((result)=>{
    	console.log(result);
    });

    db.close();

});