// for in -> Lê os índices ou chaves do objeto
const frutas = ['Maça', 'Pera', 'Uva'];

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Gabriel',
    sobrenome: 'Silva',
    idade: '22'
}

for (let i in pessoa){
    console.log(pessoa[i])
}