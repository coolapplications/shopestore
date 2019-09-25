
'use strict';
module.exports = function(router){
	router.post('/registrar', (req, res) => {
        console.log(req.body);
        res.json({status:200});
    });
}