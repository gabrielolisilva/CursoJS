function random (min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}
altura = random (1,100);
largura = random (1,100);

const resultado = (altura, largura) => largura > altura;
console.log(resultado(altura, largura), altura, largura);