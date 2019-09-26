'use strict'
const pool = require('../dataBase/dataBaseConnection')

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

  router.post('/registrar', function (req, res) {
    const { name, email, password } = req.body
    const user_data = {
      name,
      email,
      password
    }
    console.log(user_data)
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
