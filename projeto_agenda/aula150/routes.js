//ESSE ARQUIVO É SÓ PARA FAZER ROTEAMENTO, VER QUAL ROTA E CHAMAR CONTROLADOR

const express = require ('express')
const route = express.Router();
const homeController = require ('./src/controllers/homeController')
const contatoController = require ('./src/controllers/contatoController')


//Rotas da home  
route.get('/', homeController.paginaInicial);//Controller vai decidir o modelo da rota, view a ser usado
route.post('/', homeController.trataPost);

//Rotas de contato
route.get('/contato', contatoController.paginaInicial)

module.exports = route;