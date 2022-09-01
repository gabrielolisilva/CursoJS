require('dotenv').config(); //variáveis de ambiente .env (coisas confidenciais)
const express = require('express'); //Iniciando Express
const app = express(); //Iniciando Express
const mongoose = require ('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)//Por ser promise tem then e catch
    .then(() => {
        app.emit('pronto')//Emitir isso para falar que conectou a base de dados
    })
    .catch(e => console.log(e));//Modelar base de dados e garantir que é da forma certa o save
const session = require('express-session');//Identificar navegador do cliente e salvar cookie com ID no pc dele, toda vez q ele conectar ele manda o cookie, o servidor checa se ele já é usuário antigo e facilita entrada
const MongoStore = require('connect-mongo');//Sessões salvas dentro da base de dados
const flash = require('connect-flash');//Flash messages, salvas na sessão, mensagens auto destrutivas, lê uma vez depois some (feedback usuário)
const routes = require ('./routes')//Rotas da aplicação /home, /contato
const path = require ('path');//Caminhos para encontrar um arquivo
const helmet = require ('helmet')//Recomendação do express para segurança
const csrf = require ('csurf')//Tokens para os formulários, fazendo com que nenhum site externo consiga postar coisas para dentro da nossa aplicação
const { middlewareGlobal, checkCsrfError, csrfMiddleware } = require ('./src/middlewares/middleware')//Middlewares, funções executadas na rota
app.use(helmet());
app.use(express.urlencoded({ extended:true }));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, 'public')));//Arquivos estáticos: js, imagens, css
app.use(session({ //configurações de sessão
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
app.set('views', path.resolve(__dirname, 'src', 'views'));//Arquivos que visualizamos na tela
app.set('view engine', 'ejs');//Engine do views
app.use(csrf());
//Nossos próprios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);
app.on('pronto', () => { //Escutou evento da base de dados
    app.listen(3000, ()=> {
        console.log('Acessar http://localhost:3000');
        console.log('Servidor executando na porta 3000')
    });
}) //Iniciar o servidor na porta 3000 com o link para acesso
