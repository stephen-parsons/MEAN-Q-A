var question = require('../controllers/question.js');
var path = require('path');

module.exports = function(app){

  //LOGIN

  app.post('/user/login', function(req,res){
    console.log("USER!")
    req.session.user = req.body.name;
    return res.json(req.session.user);
  })

  app.get('/user/get', function(req,res){
    return res.json(req.session.user);
  })

  app.get('/user/logout', function(req,res){
    req.session.user = null;
    return res.json({logout: true});
  })

  // QUESTION ROUTES

  app.post('/question/create', function(req, res) {
    console.log(req.body);
    question.create(req,res); 
  })

  app.get('/question/all', function(req, res) {
    question.findAllQuestions(req,res); 
  })

  app.post('/answer/create', function(req, res){
    question.createAnswer(req, res)
  })

  app.get('/answer/like/:id', function(req, res){
    question.likeAnswer(req, res, req.params.id)
  })

  // ROOT
  app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./angularApp/dist/index.html"))
  });
};