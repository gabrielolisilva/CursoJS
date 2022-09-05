const express = require ('express')
const route = express.Router();
const homeController = require ('./src/controllers/homeController')
const loginController = require ('./src/controllers/loginController')


//Todas da home
route.get('/', homeController.index);

//Rotas de login
route.get('/login/index', loginController.index);

//Rota de register
route.post('/login/register', loginController.register);

module.exports = route;