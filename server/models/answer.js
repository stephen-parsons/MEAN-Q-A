// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var AnswerSchema = new mongoose.Schema({
	answer: {
		type: String,

		minlength: [5, "Answer must be at least 5 characters long."], 

		required: [true, "Please enter text for your answer."]
	},
	details: {
		type: String, 

		required: [false]
	},
	likes: {
		type: Number,

		required: [false]
	},
	user: {
		type: String,

		required: [true]
	},
	_question: {type: Schema.Types.ObjectId, ref: 'Question'}
},
  {timestamps: true});
// register the schema as a model
var Answer = mongoose.model('Answer', AnswerSchema);