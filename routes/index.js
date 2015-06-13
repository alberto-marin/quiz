var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* GET creditos page */
router.get('/author', function(req, res, next){
	res.render('authors');
});

/* GET question page */
/* GET answer page */

router.get('/quizes', quizController.index);
router.get('/quizes/:id', quizController.show);
router.get('/quizes/:id/answer', quizController.answer);

module.exports = router;
