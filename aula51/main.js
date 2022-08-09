const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: 25, 
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

const {nome, sobrenome, endereco: {rua,numero}} = pessoa //nome e sobrenome nesse caso são variáveis, endereço: refere-se ao acesso ao dado do objeto
console.log(numero)