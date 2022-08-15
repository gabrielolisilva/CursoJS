//Reduce mais utilizada para reduzir um array a um único elemento
const numeros = [5 , 50, 80 , 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const total = numeros.reduce(function(acumulador, valor, indice, array){
    acumulador += valor;
    return acumulador; //precisa retonar o acumulador para ele continuar o looping
}, 0); //valor que guia o acumulador, se n tiver nd é o tamanho do array

console.log(total)

const valorPar = numeros.filter(valor => valor % 2 === 0)
console.log(valorPar)

const valorDobro = numeros.map(valor => valor * 2)
console.log(valorDobro)