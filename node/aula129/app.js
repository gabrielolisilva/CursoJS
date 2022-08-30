const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'teste.json'); // '..' dois pontos é para voltar uma pasta
const escreve = require('./modules/escrever')
const ler = require('./modules/ler');

/*
const pessoas = [
    {nome: 'João'},
    {nome: 'Maria'},
    {nome: 'Eduardo'},
    {nome: 'Luiza'}
]

const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json)
*/

async function leArquivo (caminho){
    const dados = await ler(caminho);
    renderizaDados (dados);
}

function renderizaDados(dados){
    dados = JSON.parse(dados);//json > js
    dados.forEach(val => console.log(val))
}

leArquivo(caminhoArquivo)
