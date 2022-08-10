//Jeito 1
function maiorValor (x, y){
    if (x > y){
        return x;
    } else {
        return y;
    }
}

function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const valor1 = random (1,50);
const valor2 = random (1,50);

let valor = maiorValor (valor1, valor2);
console.log(`O maior valor entre ${valor1} e ${valor2} é ${valor}`)

//Jeito 2
const maiorValor1 = (x,y) => x > y ? x : y;
console.log(maiorValor1(200,30))