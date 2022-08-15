const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const nomePessoa = pessoas.map(valor => valor.nome)
console.log(nomePessoa)

const removeNome = pessoas.map(valor => ({ idade: valor.idade}));
console.log(removeNome)

const comID = pessoas.map(function(valor, indice){ //nesse caso você está mexendo no próprio array, caso não queira isso é melhor criar uma cópia dele
    const newObj = {...valor};
    newObj.id = indice;
    return newObj;
})
console.log(pessoas) //objeto original ta intacto
console.log(comID) //cópia do obj original acrescentando ID