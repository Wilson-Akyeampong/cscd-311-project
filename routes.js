const express = require('express');
const Route = express.Router();
const UserController = require('./controller/UserController');


Route.get('/', (req, res) => {
    res.render('index');
})

//for the registration
Route.get('/register', UserController.registerPage)
Route.get('/login', UserController.loginPage);
Route.post('/login', UserController.login);

Route.post('/register', UserController.register );

module.exports = Route;