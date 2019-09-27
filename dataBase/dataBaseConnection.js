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
  const sql = 'SELECT * FROM USERS WHERE USERNAME = ?'
  var loginInfo = {
    USERNAME: 'f',
    PASSWORD: '1234'
  }
  const _result = connection.query(sql, [loginInfo.USERNAME], function(err, result){
    var query_result = result[0]
     console.log(query_result.USERNAME)
  })
})
promisify(pool.query)
module.exports = pool
