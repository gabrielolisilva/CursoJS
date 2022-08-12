//Declaração de função (Function hoisting)
function digitaOi(){
    console.log('OI');
}
digitaOi();

//First-class objects, function expression
const souUmDado = function(){
    console.log('Sou um dado');
}

function executaFuncao (funcao){
    funcao();
}
executaFuncao(souUmDado);

//Arrow function
const funcaoArrow = () => {
    console.log('Sou uma arrow function')
};
funcaoArrow();

//Todas as funções anteriores são objetos de primeira classe

//Função dentro de objeto

const obj = {
    falar(){
        console.log('Falei OI')
    }
}
obj.falar();