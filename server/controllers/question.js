var mongoose = require('mongoose');
var Question = mongoose.model('Question');
var Answer = mongoose.model('Answer');

module.exports = {
  create: function(req, res) {
      var question = new Question(req.body);
      question.save(function(err) {
        if(err) {
          console.log('something went wrong'); 
          return res.json(err); 
        }
        else{
        	console.log('saved question!')
        	return res.json(question);
        }
    }); 
  },

  createAnswer: function(req,res){
    console.log(req.body);
    var answer = new Answer(req.body.answer);
    answer.likes = 0;
    answer._question = req.body.question._id;
    answer.save(function(err) {
      if(err) {
        console.log('something went wrong'); 
        return res.json(err); 
      }
      let newAnswers = req.body.question.answers;
      newAnswers.push(answer);
      Question.findByIdAndUpdate(req.body.question._id, {$set : {answers: newAnswers}}, function(err){
        if(err) {
          console.log('something went wrong'); 
          return res.json(err); 
        }
        else{ 
          console.log('successfully added an answer!');
          return res.json(answer);
        }
      });
    });
  },

  findAllQuestions: function(req,res){
    Question.find({}).populate('answers').exec(function(err, questions) {
      if(err){
        console.log(err);
        }
      else {
        console.log("All questions:", questions); 
        return res.json(questions);
      }
    }) 
  },

  likeAnswer: function(req,res, id){
    console.log(id);
    Answer.find({_id: id}, function(err, answer){
      if(err) {
        console.log('something went wrong'); 
        return res.json(err); 
      }
      else { 
        console.log(answer[0]);
        if (answer[0].likes == null){
          answer[0].likes = 1;
        }
        else {
          answer[0].likes += 1;
        }
        answer[0].save(function(err) {
          if(err) {
            console.log('something went wrong'); 
            return res.json(err); 
          }
          else{
            console.log("Added like!")
            return res.json(answer[0]);
          }
        }
      )} 
    })
  }  
}