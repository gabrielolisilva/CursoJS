function somar(x, y){
    const resultado = x + y;
    return resultado
}

function soma(x = 2, y = 2){ //valores fixos no x e y caso não queira adicionar nada na hora de chamar igual foi feito na linha 12
    const resultado = x + y;
    return resultado
}

const raiz = function (n){ //segunda forma de criar função
    return n ** 0.5
}

const dividir = (n) => { //arrow function
    return n / 2
}

console.log(somar(200, 500))
console.log(soma())
console.log(soma(4))

console.log(raiz(25))
console.log(dividir(100))