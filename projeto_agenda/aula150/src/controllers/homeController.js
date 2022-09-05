//PÁGINA PARA O QUE VAI APARECER NA TELA
const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res) => {
    res.render('index', {
        titulo: 'Este é o título da página',
        numeros: [0, 1, 2, 3, 4, 5]
    });
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}