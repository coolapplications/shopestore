'use strict'
const pool = require('../dataBase/dataBaseConnection')
var customValidations = {
  userExists: async (userName) => {
    return null
  },
  passwordsMatch: function () {
    return null
  },
  minUserNameLength: 5,
  maxUserNameLength: 100,
  minPasswordLength: 5,
  maxPasswordLength: 20
}
