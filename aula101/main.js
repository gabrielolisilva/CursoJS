//Objeto Map()
//Desafio: ID como identificador da pessoa

const pessoas = [
    { id: 3, nome: 'Luiz'},
    { id: 2, nome: 'Maria'},
    { id: 1, nome: 'Helena'}
];

const novasPessoas = new Map();
for (const pessoa of pessoas){
    const {id} = pessoa;//aqui pega só o ID da pessoa
    novasPessoas.set(id, { ...pessoa}); //aqui mostra ID seguido do valor pessoa
}

//             Destructuring
for (const [identifier, { id, nome}] of novasPessoas){
    console.log(identifier, id, nome)
}