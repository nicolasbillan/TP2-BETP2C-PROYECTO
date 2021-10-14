const express = require('express');
const { route } = require('.');
const router = express.Router();
const data = require('../data/inventor');

router.get('/', async (req, res) =>{
    let inventors = await data.getInventors();

    res.json(inventors);
});

//get /:id

//post /

//put /:id

//delete /:id

module.exports = router;