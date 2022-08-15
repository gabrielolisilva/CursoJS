const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Letícia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47}
];

const maisVelha = pessoas.reduce(function(acumulador, valor){
    //acumulador nesse caso é o primeiro elemento e valor é o segundo
    if(acumulador.idade > valor.idade) return acumulador;
})//se colocasse 0 aqui o acumulador iria ser 0 e o valor iria ser Luiz
console.log(maisVelha)