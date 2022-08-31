//PÁGINA PARA O QUE VAI APARECER NA TELA
const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um outro título de testes.',
    descricao: 'Uma outra descrição de testes.'
})
    .then(dados => console.log(dados))
    .catch(e => console.log(e));

exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao cliente')
    //renderizando o arquivo index.ejs dentro de views
    res.render('index');
    return;
}

exports.trataPost = (req, res) => {
    res.send(req.body);
    return;
}