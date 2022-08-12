//function possui uma variável 'arguments' que sustenta todos os argumentos enviados
function funcao(a, b, c){
    let total = 0;
    for(let argumento of arguments){
        total += argumento;
    }

    console.log(total, a, b, c);
}
funcao(1,2,3,4,5,6,7,8,9)

function soma(a, b = 2, c = 4){
    console.log(a + b + c);
}
soma(2, undefined, 20) //único jeito de assumir o b = 2 lá de cima é com undefined

function funcao1([valor1, valor2, valor3]){ //atribuição por desestruturação de array
    console.log(valor1, valor2, valor3);
}
funcao1(['Gabriel', 'Silva', 22])

function conta (operador, acumulador, ...numeros){ //...numeros, RestOperator, para pegar todos os valores depois do acumulador 1
    for(let numero of numeros){
        if(operador === '+') acumulador += numero;
        if(operador === '-') acumulador -= numero;
        if(operador === '/') acumulador /= numero;
        if(operador === '*') acumulador *= numero;
    }
    console.log(acumulador);
}
conta('*', 1, 20, 30, 40, 50);