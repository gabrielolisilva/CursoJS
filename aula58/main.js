// Não sabe exatamente quando vai terminar então usa while
// do while executa a função uma vez antes de checar a condição
function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
const min = 1;
const max = 50;

let valorRandom = random(min, max);

while (valorRandom !== 10){
    valorRandom = random(min, max);
    console.log(valorRandom)
}