const { Router } = require('express');
const pool = require('../utils/pool');
const { getCocktail } = require('../utils/random-drink');

module.exports = Router()

    .post('/', async (req, res, next) => {
        const drink = await getCocktail();
        res.send(drink);
    })