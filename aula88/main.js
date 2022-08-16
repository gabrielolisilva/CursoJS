//forEach só disponível dentro de arrays, só itera sobre os valores

const a1 = [10, 22, 34, 42, 51, 65, 77, 80, 91];
a1.forEach(function(valor, indice, array){
    console.log(valor, indice)
});