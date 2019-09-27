'use strict'
const pool = require('../dataBase/dataBaseConnection')
const { check, validationResult } = require('express-validator')
const validationsNewUser = [check('name').isLength({ min: 4 }), check('email').isEmail(), check('password').isLength({ min: 5 })]
module.exports = function (router) {
  router.get('/', function (_req, res) {
    res.render('index')
  })

  router.get('/login', function (_req, res) {
    res.render('pages/login')
  })

  router.get('/registrar', function (_req, res) {
    console.log('render')
    res.render('pages/registrar')
  })

  router.post('/registrar', async function (req, res) {
    const { name, email, password } = req.body
    const userData = {
      name,
      email,
      password
    }
    pool.query('INSERT INTO USERS SET ?', [userData])
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
}
