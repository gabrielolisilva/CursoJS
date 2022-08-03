const nome = 'Gabriel';
const sobrenome = 'Silva';
const idade = 23;
const peso = 84;
const altura = 1.80;
let imc = peso / (altura * altura)
const agora = new Date()
const anoAtual = agora.getFullYear()
let anoNascimento = anoAtual - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg tem ${altura} de altura e seu IMC é de ${imc} ${nome} nasceu no ano de ${anoNascimento}`)
