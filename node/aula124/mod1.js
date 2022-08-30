const nome = 'Gabriel';
const sobrenome = 'Silva';

const falaNome = () => {
    console.log(nome, sobrenome);
};

//três maneira de exportar
//Esse nome dps de exports é o nome da chave
module.exports.nome = nome;
exports.sobrenome = sobrenome;
this.falaNome = falaNome;

console.log(module.exports)