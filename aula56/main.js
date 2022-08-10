//For clássico -> Geralmente com iteráveis (arrays ou strings)
//For in -> Retorna o índice ou chave (string, array ou objetos)
// For of -> Retorna o Valor em si (iteráveis, arrays ou strings)
const nome = 'Gabriel Silva';

for (let i of nome){
    console.log(i)
}
console.log('#######')
const frutas = ['Uva', 'Goiaba', 'Maça']

for (let i of frutas){
    console.log(i)
}
console.log('#######')
frutas.forEach(function(indice, valor){
    console.log(indice, valor)
});