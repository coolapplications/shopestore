'use strict'
const pool = require('../dataBase/dataBaseConnection')
const {
    check,
    validationResult
} = require('express-validator')
const validationsNewUser = [check('name').isLength({
    min: 4
}), check('email').isEmail(), check('password').isLength({
    min: 5
})]
module.exports = function (router) {
    router.get('/', function (_req, res) {
        res.render('index')
    })

    router.get('/login', function (_req, res) {
        res.render('pages/login')
    })

    router.post('/login', async function (req, res) {
        const body = req.body
        const name = body.name[0]
        const password = body.name[1]
        const loginInfo = {
            USERNAME: name,
            PASSWORD: password
        }
        console.log(loginInfo)
        const sql = 'SELECT * FROM USERS WHERE USERNAME = ?, PASSWORD = ?'
        console.log(pool.query(sql, [loginInfo]))
        res.render('index')
    })
    router.get('/registrar', function (_req, res) {
        console.log('render')
        res.render('pages/registrar')
    })

    router.post('/registrar', async function (req, res) {
        const {
            name,
            email,
            password
        } = req.body
        const userData = {
            USERNAME: name,
            EMAIL: email,
            PASSWORD: password
        }
        const sql = 'INSERT INTO USERS SET ?'
        pool.query(sql, [userData])


        res.render('pages/registrar')
    })

    router.get('/login', function (_req, res) {
        res.render('pages/login')
    })

    router.get('/contacto', function (_req, res) {
        res.render('pages/contacto')
    })

    router.get('/inicio', function (_req, res) {
        res.render('pages/inicio')
    })

    router.get('/rastrear', function (_req, res) {
        res.render('pages/rastrear')
    })

    router.get('/categorias', function (_req, res) {
        res.render('pages/categorias')
    })

    router.get('/cart', function (_req, res) {
        res.render('pages/cart')
    })


    router.get('/cart', function (_req, res) {
        res.render('pages/cart');
    });

};
