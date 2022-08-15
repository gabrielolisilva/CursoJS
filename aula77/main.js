function Pessoa(nome, sobrenome){ //nesse caso não precisa de vírgula entre as chaves do objeto
    
    //métodos privados, não disponíveis fora do objeto
    const ID = 12345; 
    const metodoInterno = function(){

    }
    // métodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function (){
        console.log('Eu sou um método')
    }
}

const p1 = new Pessoa('Gabriel', 'Silva') //palavra new fez o this apontar para a pessoa que chamou
const p2 = new Pessoa('Maria', 'Luiza')
p1.metodo();