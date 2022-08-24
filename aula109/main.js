function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise ((resolve, reject) => {
        if(typeof msg !== 'string'){
             reject (false);
             return;
            };

        setTimeout(() => {
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo)
    });
}

/* Promise.all - resolve todas as promises, caso uma promise de erro todas serão rejeitadas
const promises = [
    'Primeiro valor',
    esperaAi('Promise 1', 3000),
    esperaAi('Promise 2', 500),
    esperaAi('Promise 3', 1000),
    'Outro valor'
];

Promise.all(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })

*/

/*Promise.race - vai tentar resolver várias promises a que resolver primeiro mostra
const promises = [
    esperaAi('Promise 1', rand(1, 5)),
    esperaAi('Promise 2', rand(1, 5)),
    esperaAi('Promise 3', rand(1, 5)),
];

Promise.race(promises)
    .then(function(valor){
        console.log(valor)
    })
    .catch(function(erro){
        console.log(erro)
    })
*/

/*Promise.resolve
function baixaPagina(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Página em cache'); resolve ele cai no then
    } else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log(e))
*/

/*Promise.reject
function baixaPagina(){
    const emCache = true;

    if(emCache){
        return Promise.reject('Página em cache'); sempre que for reject ele cai no catch
    } else{
        return esperaAi('Baixei a página', 3000);
    }
}

baixaPagina()
    .then(dadosPagina => {
        console.log(dadosPagina)
    })
    .catch(e => console.log('Erro', e))
*/