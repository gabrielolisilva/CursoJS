//PÁGINA PARA O QUE VAI APARECER NA TELA
exports.paginaInicial = (req, res) => {
    //renderizando o arquivo index.ejs dentro de views
    res.render('index');
}

exports.trataPost = (req, res) => {
    res.send(`Seu formulário foi enviado ${req.body.nome}`)
}