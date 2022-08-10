function verificador(valor){
    if (typeof valor !== 'number') return valor;
    if (valor % 3 === 0 && valor % 5 === 0) return(`${valor} Fizz Buzz`)
    else if (valor % 3 === 0) return(`${valor} Fizz`)
    else if (valor % 5 === 0) return(`${valor} Buzz`)
    else return(`${valor} não é divisivel nem por 3 nem por 5`)
}

for (let i = 0; i <= 100; i++){
    console.log(verificador(i));
}


