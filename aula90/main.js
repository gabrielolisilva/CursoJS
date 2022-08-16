// defineProperty - defineProperties
// trava uma chave / trava várias chaves de uma vez para n poder ser alterada

function Produto(nome,preco,estoque){
    Object.defineProperty(this, 'estoque', {//this se refere ao objeto que está sendo criado
        enumerable: true, //quero que o estoque aparece qd executar
        value: estoque,  
        writable: false, //não posso alterar o valor do estoque
        configurable: true //pode reconfigurar a chave e apagar a chave, criando outro objet.defineProperty
    }); 

    Object.defineProperties(this, {
        nome: {
            enumerable: true, //quero que o estoque aparece qd executar
            value: nome,  
            writable: true, //alterar o valor do estoque
            configurable: true //pode reconfigurar a chave e apagar a chave, criando outro 
        },
        preco: {
            enumerable: true, //quero que o estoque aparece qd executar
            value: preco,  
            writable: true, //não posso alterar o valor do estoque
            configurable: true //pode reconfigurar a chave e apagar a chave, criando outro 
        },
    });
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)