const { Router } = require('express');
const pool = require('../utils/pool');
const UserService = require('../services/UserService');

module.exports = Router()

    .post('/', async (req, res, next) => {
        try {
            const newUser = await UserService.create(req.body);
            res.send(newUser);
        } catch (err) {
            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const userInfo = await UserService.get(req.params.id);
            res.send(userInfo);
        } catch (err) {
            next(err);
        }
    })
