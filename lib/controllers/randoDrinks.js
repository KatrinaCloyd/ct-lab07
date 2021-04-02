const { Router } = require('express');
const pool = require('../utils/pool');
const UserService = require('../services/UserService');
const Users = require('../models/Users');

module.exports = Router()

    .post('/', async (req, res, next) => {

        try {

            console.log(req.body);
            const newUser = await UserService.create(req.body);
            res.send(newUser);
        } catch (err) {
            next(err);
        }
    })

    .get('/', async (req, res, next) => {
        try {
            const userInfo = await Users.get();
            res.send(userInfo);
        } catch (err) {
            next(err);
        }
    })

    .get('/:id', async (req, res, next) => {
        try {
            const userInfo = await UserService.getById(req.params.id);
            res.send(userInfo);
        } catch (err) {
            next(err);
        }
    })

    .put('/:id', async (req, res, next) => {
        try {
            const userInfo = await UserService.updateFav(req.params.id, req.body.newFav);
            res.send(userInfo);
        } catch (err) {
            next(err);
        }
    })

    .delete('/:id', async (req, res, next) => {
        try {
            const userInfo = await UserService.delete(req.params.id);
            res.send(userInfo);
        } catch (err) {
            next(err);
        }
    })
