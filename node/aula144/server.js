require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require ('mongoose');


mongoose.connect(process.env.CONNECTIONSTRING)
    .then(() => {
        app.emit('pronto')
    })
    .catch(e => console.log(e));


const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require ('./routes')
const path = require ('path');
const meuMiddleware = require ('./src/middlewares/middleware')

app.use(express.urlencoded({ extended:true })); //para fazer funcionar o req.body

app.use(express.static(path.resolve(__dirname, 'public')));


app.use(session({
    secret: 'dawdawdwauwa',
    store: MongoStore.create({
        mongoUrl: process.env.CONNECTIONSTRING,
    }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
}));

app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));//caminho absoluto
app.set('view engine', 'ejs');

//Nossos próprios middlewares
app.use(meuMiddleware);
app.use(routes);

//conexão com o servidor só ocorre depois que ele buscar tudo da base de dados
app.on('pronto', () => { 
    app.listen(3000, ()=> {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000')
    });
})
