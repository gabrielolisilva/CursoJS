//Retorne pessoas com nome com 5 letras ou mais 
//Retorne pessoas com mais de 50 anos 
//Retorne pessoas cujo nome termina com a letra a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const pessoasNomeGrande = pessoas.filter(valor => valor.nome.length >= 5);
console.log(pessoasNomeGrande) //pessoasNomeGrande vira um novo array

const pessoasIdade = pessoas.filter(valor => valor.idade > 50);
console.log(pessoasIdade)

//colocar em minúsculo para fazer só uma vez
const ultimaLetra = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
console.log(ultimaLetra)