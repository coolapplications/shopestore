'use strict';
//const pool = require('../dataBase/dataBase');



module.exports = function (router) {
    router.get('/', function (_req, res) {
        res.render('index');
    });

    router.get('/login', function (_req, res) {

        res.render('pages/login');
    });


    router.get('/registrar', function (_req, res) {
        console.log('render');
        res.render('pages/registrar');
    });
    router.post('/registrar', function (req, res) {
        console.log(req.body)
        res.send('got it')
    });



    router.get('/login', function (_req, res) {

        res.render('pages/login');
    });

    router.get('/contacto', function (_req, res) {
        res.render('pages/contacto');
    });

    router.get('/inicio', function (_req, res) {
        res.render('pages/inicio');
    });

    router.get('/rastrear', function (_req, res) {
        res.render('pages/rastrear');
    });

    router.get('/categorias', function (_req, res) {
        res.render('pages/categorias');
    });

    router.get('/cart', function (_req, res) {
        res.render('pages/cart');
    });

}
