'use strict'
const pool = require('../dataBase/dataBaseConnection')
module.exports = function (router) {
    router.get('/', function (_req, res) {
        res.render('index')
    })

  router.get('/login', function (_req, res) {
    res.render('pages/login')
  })
  router.post('/login', async function (req, res) {
    const { name } = req.body
    const sql = 'SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = ?'
    var results = function (err, result) {
      if (err) throw err
      if (result.length === 0) {
        res.render('pages/login', { message: 'Incorrect password or account' })
      } else res.render('pages/login')

    }
    pool.query(sql, [name[0], name[1]], results)
  })
  router.get('/registrar', function (_req, res) {
    res.render('pages/registrar')
  })

  router.post('/registrar', async function (req, res) {
    const { name, email, password } = req.body
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
