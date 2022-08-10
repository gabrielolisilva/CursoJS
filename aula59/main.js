//tudo que está depois do continue ele pula
//Quando ele achar o break ele para o laço
const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros){

    if(numero === 2 || numero === 5){
        continue;
    }

    if(numero === 8){
        console.log('8, Valor encontrado')
        break;
    }

    console.log(numero);
}