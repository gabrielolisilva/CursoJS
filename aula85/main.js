//Mesma coisa que filter mas no retorno final queremos alterar os valores do array
//Map tem sempre o mesmo tamanho do array original
//Tbm tem parâmetro valor, índice e array
//Dobrar os valores
const numeros = [5 , 50, 80 , 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobro = numeros.map(valor => valor * 2)
console.log(numerosDobro)