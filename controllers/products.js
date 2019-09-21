'use strict';

module.exports = function(router){
	router.get('/', function(req, res){
		res.render('index');
	});

	router.get('/details/:id', function(req, res){
		res.render('products/details');
	});

	router.get('/detalles', function(req, res){
		res.render('products/detalles');
	});
}
