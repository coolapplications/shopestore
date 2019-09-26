'use strict';
//const pool = require('../dataBase/dataBase');
module.exports = function (router) {
    router.get('/', function (req, res) {
        res.render('index');
    });


    router.get('/detalles', function (req, res) {
        res.render('products/detalles');
    });
};
