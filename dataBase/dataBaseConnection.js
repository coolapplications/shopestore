const mysql = require('mysql')
const { promisify } = require('util')
const { database } = require('./dataBase')

const pool = mysql.createPool(database)

pool.getConnection((error, connection) => {
  if (error) {
    switch (error.code) {
      case 'PROTOCOL_CONNECTION_LOST':
        console.error('Database connection was closed.')
        break
      case 'ER_CON_COUNT_ERROR':
        console.error('Database has to many connections')
        break
      case 'ECONNREFUSED':
        console.error('Database connection was refused')
        break
      default:
        console.error('UNKNOWN')
    }
  }

  if (connection) {
    connection.release()
  }
  const sql = 'SELECT * FROM USERS WHERE USERNAME = ? AND PASSWORD = ?'
  var userInfo = {
    USERNAME: 'Presi',
    PASSWORD: '1234'
  }
  connection.query(sql, [userInfo.USERNAME, userInfo.PASSWORD], function (err, result) {
    if (err) throw err
    console.log(result)
  })
})
promisify(pool.query)
module.exports = pool
