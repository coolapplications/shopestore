'use strict';

module.exports = function(router){
	router.get('/', function(req, res){
		res.render('index');
	});

	router.get('/registrar', function(req, res){
		res.render('pages/registrar');
	});
}
