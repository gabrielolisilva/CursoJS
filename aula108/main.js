//Promises colocar elementos para serem executados na ordem certa
function rand(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string') reject(new Error('Erro'))

        setTimeout(()=> {
            resolve(msg); //resolvendo logo após o código executado
        }, tempo);
    });
}

//qd chamarmos resolve o then vai ser executado
esperaAi('Conexão com o BD', rand(1, 3))
.then(resposta => {       //esse resposta se refere a msg
    console.log(resposta);
    return esperaAi('Buscando dados da BASE', rand(1, 3));
}).then(resposta => {
    console.log(resposta);
    return esperaAi(22222, rand(1, 3));
}).then(resposta => {
    console.log(resposta);
})
.catch(e => {
    console.log('Erro',e);
})