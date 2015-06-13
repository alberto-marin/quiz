var models = require('../models/models.js');

exports.index = function(req, res){
	models.Quiz.findAll().then(function(quiz){
		res.render('quizes/index', { quiz: quiz});
	});
};


// GET /quizes/question

exports.show = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		res.render('quizes/show', { quiz: quiz});
	});
};

// GET /quizes/answer

exports.answer = function(req, res){
	models.Quiz.find(req.params.quizId).then(function(quiz){
		if (req.query.respuesta === quiz.respuesta){
			res.render('quizes/answer', { respuesta: 'Correcto'});
		} else {
			res.render('quizes/answer', { respuesta: 'Incorrecto'});
		}
	});
	
};