
'use strict'
module.exports = function (router) {

  function empty_fields(body){
    return body.userName === '' || body.email === '' || body.password === '' || body.passwordConfirmation === ''
  }

  function valid_email(body){
    var email_pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return email_pattern.test(body.email)
  }

  function password_coincide(body){
    return body.password === body.passwordConfirmation
  }
  router.post('/pages/registrar', function (req, res) {
    console.log(req.body)
    res.render('/pages/registrar')
  })
}

