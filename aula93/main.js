function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome;
}

//Prototype é uma um objeto que é criado por padrão quando criamos a função Pessoa, podemos colocar todas as chaves criadas no objeto acima dentro dele para melhorar a performance. Quando executamos o new Date(), podemos ver que nele só aparece o __proto__ (pai do objeto Pessoa), e dentro do proto temos todos os recursos que podemos fazer com o Date. Conseguimos ver esse __proto__ pelo console do navegador.

//Hierarquia Pessoa -> Pessoa.prototype -> Object.prototype 

Pessoa.prototype.nomeCompleto = function(){
    return this.nome + ' ' + this.sobrenome;
}

const pessoa1 = new Pessoa('Luiz', 'O.')
const pessoa2 = new Pessoa('Maria', 'A.')