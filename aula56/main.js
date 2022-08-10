// For of -> Mostra o valor e não o índice
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