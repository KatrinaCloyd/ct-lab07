const { Router } = require('express');
const pool = require('../utils/pool');
const UserService = require('../services/UserService');
const { getCocktail, mungeCocktail } = require('../utils/random-drink');

module.exports = Router()

    .post('/', async (req, res, next) => {
        try {
            const newUser = await UserService.create(req.body);
            res.send(newUser);
        } catch (err) {
            next(err);
        }
    })
