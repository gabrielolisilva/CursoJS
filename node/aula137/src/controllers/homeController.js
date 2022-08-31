//PÁGINA PARA O QUE VAI APARECER NA TELA
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