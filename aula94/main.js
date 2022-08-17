/*
const objA = {
    chaveA: 'A'
}

const objB = {
    chaveB: 'B'
};

Object.setPrototypeOf(objB, objA) - dentro do objeto B agora tenho a chave do objeto A
console.log(objB.chaveA); - Positivo: Pode reaproveitar códigos que estão em outros objetos agora
*/
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){ //adicionando um método ao prototype de Produto
    this.preco = this.preco - (this.preco * (percentual / 100))
};

Produto.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100))
};

const p1 = new Produto('Camiseta', 50);
const p2 = {
    nome: 'Caneca',
    preco: 15
};

p1.aumento(100);
console.log(p1)

Object.setPrototypeOf(p2, Produto.prototype) //agora p2 tem os métodos aumento e desconto também vindos do objeto Produto
p2.aumento(100);
console.log(p2)

const p3 = Object.create(Produto.prototype);
p3.preco = 120;
p3.aumento(10);
console.log(p3)