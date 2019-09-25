'use strict';
const pool = require('../dataBase/dataBase');
module.exports = function(router){
	router.get('/', function(req, res){
		res.render('index');
	});

	router.get('/registrar', function(req, res){
		res.render('pages/registrar');
		});
	
	router.post('/registrar', function(req, res){
		console.log(req.post);

		res.send('received');
	});
  router.get('/login', function(req, res){

		res.render('pages/login');
	});

	router.get('/contacto', function(req, res){
		res.render('pages/contacto');
	});

	router.get('/inicio', function(req, res){
		res.render('pages/inicio');
	});

	router.get('/rastrear', function(req, res){
		res.render('pages/rastrear');
	});

	router.get('/categorias', function(req, res){
		res.render('pages/categorias');
	});

	router.get('/cart', function(req, res){
		res.render('pages/cart');
	});

}
