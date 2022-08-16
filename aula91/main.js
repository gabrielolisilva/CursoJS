//Getters e Setters
//obter   e  config valor
function Produto(nome, preco, estoque){//constructir function
    this.nome = nome;
    this.preco = preco;

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: true,
        get: function(){
            return estoquePrivado;
        },
        set: function(valor){
            if(typeof valor !== 'number'){
                console.log('Valor Inválido')
                return
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1)
p1.estoque = 50;
console.log(p1.estoque)

//factory function
function criaProduto (nome){
    return {
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor;
        }
    };
}

const p2 = criaProduto('Calça')
p2.nome = 'Qualquer Coisa'
console.log(p2.nome)