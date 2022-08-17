//Produto -> aumento e desconto
//Camiseta = Cor / Caneca = material
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia){
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia){
    this.preco -= quantia;
}

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco); //herdando as informações de nome e preço da função Produto a função camiseta
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //criando um objeto vazio que irá receber o protype do Produto e atribuir ao prototype da Camiseta, quando faz essa atribuição o constructor da função camiseta vira produto
Camiseta.prototype.constructor = Camiseta; //faz isso para setar novamente o constructor da função sendo camiseta

function Caneca (nome, preco, material, estoque){
    Produto.call(this,nome, preco);
    this.material = material;

    Object.defineProperty(this, 'estoque', {
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if(typeof valor !== 'number') return;
            estoque = valor
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;


const camiseta = new Camiseta ('Regata', 7.5, 'Preta')
const caneca = new Caneca ('Caneca', 50, 'Plástico', 5)
caneca.estoque = 100;

console.log(camiseta)
console.log(caneca)