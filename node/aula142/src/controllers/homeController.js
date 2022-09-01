//PÁGINA PARA O QUE VAI APARECER NA TELA
const HomeModel = require('../models/HomeModel')

exports.paginaInicial = (req, res) => {
    console.log(req.flash('info'))//req.flash ('info', 'Olá mundo!')
    console.log(req.session.usuario)//req.session.usuario = {nome: 'Luiz', logado: true};
    console.log('Respondendo ao cliente')
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}