const express = require('express');
const app = express();

app.use(express.urlencoded({ extended:true })); //para fazer funcionar o req.body

app.get('/', (req, res) => {
    //html entre crases
    res.send(`
        <form action='/' method='POST'>
            Nome do Cliente: <input type="text" name="nome"></input>
            <button>Olá mundo</button>
        </form>
    `);
});

//req.params - adicionar parâmetros opcionais junto a url para identificação (depois do 2 pontos), a interrogação server para falar que o parâmetro é opcional
//req.query na aba do navegador (url) escrever testes/?nome=Luiz depois de "?"
//req.body informações que vem depois do post ou put

app.get('/testes/:idUsuarios?', (req, res) => {
    console.log(req.params) //acessar os parâmetros
    res.send('OI')
})

app.post('/', (req, res) => {
    console.log(req.body);
    res.send(`O que você me enviou foi: ${req.body.nome}`) //esse nome é o name do input
})

app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
});