var path = require('path');

// Cargar modelo ORM
var Sequelize = require('sequelize');

// Sqlite
var sequelize = new Sequelize(null, null, null,{
									dialect: "sqlite", storage: "quiz.sqlite"
								});
// Importar la definición de la tabla Quiz en quiz.js
var Quiz = sequelize.import(path.join(__dirname, 'quiz'));

exports.Quiz = Quiz; // exportar la definición de la tabla

// Iniciar tabla de preguntas en la base de datos
sequelize.sync().success(function(){
	// success ejecuta el manejador una vez creada la tabla
	Quiz.count().success(function(count){
		if (count === 0) {
			Quiz.create({ pregunta: "Capital de Italia",
										respuesta: "Roma"}).success(function(){
											console.log('Base de datos inicializada')
										});
		};
	});
});