//SITE SIMPLES PARA NAVEGAR
//MANDEIRA DE EXECUTAR: NO PLAY, TERMINAL OU PROMPT DE COMANDO DO WINDOWS - node server.js

const express = require('express');
const app = express();

//Operações comuns de APIS
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT    DELETE

//        requisição, reposta
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//app.post será o que será exibido qd um formulário for entregue
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco')
})

app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
}); //porta