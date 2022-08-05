const nome1 = 'Luiz'
const sobrenome1 = 'Miranda'
const idade1 = 25

//isso de cima é a mesma coisa que isso debaixo

const pessoa1 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    falar(){
        console.log(`A minha idade atual é de ${this.idade}`)
    },
    
    incrementarIdade(){
        this.idade++
    }
}

console.log(pessoa1)
pessoa1.falar()
pessoa1.incrementarIdade()
pessoa1.falar()