//IIFE - Immediately invoked function expression
(function(){//colocar a função entre parênteses
    console.log(123456);
}) (); //esses 2 parênteses estão responsável por chamar a função

(function(idade, peso, altura){
    const sobrenome = 'Silva';
    function criaNome (nome){
        return nome + ' ' + sobrenome;
    }

    function falaNome(){
        console.log(criaNome('Gabriel'))
    }

    falaNome();
    console.log(idade, peso, altura)
}) (30, 80, 1.80);