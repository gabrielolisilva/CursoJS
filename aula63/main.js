function somar (x, y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error ('x e y precisam ser numeros.') //esse Error é para o desenvolvedor ver que tipo de erro é
    }

    return x + y;
}

try{ //Executado quando não há erros
    console.log(somar (1,2))
    console.log(somar ('1', 2))
} catch(error){ //nessa linha pode ser qualquer nome no lugar de error, catch executado quando da erro
    console.log('x e y precisam ser numeros.')
}