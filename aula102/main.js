//Classe, bem similar a uma função construtora

//Molde
class Pessoa {
    constructor(nome, sobrenome){ //constructor, usado quando a classe precisa receber parâmetros
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    //Os métodos criados em uma classe já vão direto para o prototype da classe
    falar(){
        console.log(`${this.nome} está falando`)
    }
}

//Instânciar
const p1 = new Pessoa('Luiz', 'Miranda');
const p2 = new Pessoa('Gabriel', 'Silva');
p1.falar()
p2.falar()