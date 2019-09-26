'use strict';
module.exports = function (router) {
    router.post('/pages/registrar', function (req, res) {
        console.log(req.body);
        res.send('got it');
    });
};
