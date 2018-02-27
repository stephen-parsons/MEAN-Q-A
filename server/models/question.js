// require mongoose
var mongoose = require('mongoose');

// IMPORT ANSWER

var Schema = mongoose.Schema;
// create the schema
var QuestionSchema = new mongoose.Schema({
	question: {
		type: String,

		minlength: [10, "Question must be at least 10 characters long."], 

		required: [true, "Please enter text for your question."]
	},
	description: {
		type: String,

		required: [false]
	},
	answers: [{type: Schema.Types.ObjectId, ref: 'Answer'}],
},
  {timestamps: true});
// register the schema as a model
var Question = mongoose.model('Question', QuestionSchema);