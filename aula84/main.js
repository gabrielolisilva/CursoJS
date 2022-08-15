//retorne números maiores que 10
//filter dentro vai ter uma função que irá passar por todos os elemenos do array numeros
const numeros = [5 , 50, 80 , 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

/* Opção 1
function callbackFilter(valor, indice, array){ esses parâmetros são padrão, depende se vc quiser usar ou não
    return valor > 10; isso já retorna true ou false
}

const numerosFiltrados = numeros.filter(callbackFilter); //essa função tem que voltar boolean, true vai ser imbutido no novo array
*/

/* Opção 2
const numerosFiltrados = numeros.filter(function(valor, indice, array){
    return valor > 10;
})
*/

/* Opção 3
const numerosFiltrados = numeros.filter(valor => valor > 10)
*/

//parâmetros exibidos
const numerosFiltrados = numeros.filter(function(valor, indice, array){ 
    console.log(valor, indice, array);
})
console.log(numerosFiltrados)