const { Router } = require('express');
const pool = require('../utils/pool');
const { getCocktail, mungeCocktail } = require('../utils/random-drink');

module.exports = Router()

    .post('/', async (req, res, next) => {
        const drink = await getCocktail();
        const cocktail = mungeCocktail(drink);

        res.send(cocktail);
    })
