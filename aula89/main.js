/*
const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva'
}

const chave = 'nome';
console.log(pessoa[chave]) //acesso dinâmico as informações
console.log(pessoa['nome'])
console.log(pessoa.nome)
*/

const pessoa1 = new Object();
pessoa1.nome = 'Luiz';
pessoa1.sobrenome = 'Silva';
pessoa1.falarNome = function(){
    console.log(`${this.nome} OI`) //this faz referência as chaves dentro do objeto
}
pessoa1.falarNome();

//caso queira travar um objeto Object.freeze(nome do obj)