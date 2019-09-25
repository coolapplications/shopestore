const express = require('express');
const router = express.Router();

router.post('/registrar', (req, res) => {
    console.log(req.body);
});

module.exports = router;