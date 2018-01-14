var mongoose = require('mongoose');

var User = mongoose.model('User',{
	email: {
		type: String,
		required: true,
		trim: true,
		minlength: 1
	}
});
module.exports = {User};

// var user = new User({
// 	email: 'gargi.biswas@gmail.com  '
// });

// user.save().then((doc)=>{
// 	console.log(JSON.stringify(doc,undefined,2));
// },(err)=>{
// 	console.log('Error while trying to insert other todo record '+err);
// });