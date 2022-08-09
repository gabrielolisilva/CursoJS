for(let i = 0; i <= 10; i++){
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(`${i}, o número é ${par}`);
}

const frutas = ['Maça', 'Pêra', 'Uva']
for (let a = 0; a < frutas.length; a++){ // não pode ser <= porque a lista começa em 0
    console.log(frutas[a])
}