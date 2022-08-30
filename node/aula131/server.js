//Instalando como dev dependecies para ficar só no  computador e não no projeto todo 
//Nodemon - sempre que uma alteração for feita ele da restart no servidor com as alterações novas
//pwd - mostra caminho
//cd - abrir o local

const express = require('express');
const app = express();

//Operações comuns de APIS
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST    GET   PUT    DELETE

//        requisição, reposta
app.get('/', (req, res) => {
    res.send('Hellooo World!');
});

//app.post será o que será exibido qd um formulário for entregue
app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato conosco')
})

app.listen(3000, ()=> {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000')
}); //porta