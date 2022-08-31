//PÁGINA PARA O QUE VAI APARECER NA TELA
exports.paginaInicial = (req, res) => {
    //html entre crases
    res.send(`
        <form action='/' method='POST'>
            Nome do Cliente: <input type="text" name="nome"></input>
            <button>Olá mundo</button>
        </form>
    `);
}

exports.trataPost = (req, res) => {
    res.send(`Seu formulário foi enviado ${req.body.nome}`)
}