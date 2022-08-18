//Factory functions (Retorna Objeto) + Prototypes 
function criaPessoa (nome, sobrenome){
    const pessoaPrototype = {
        falar() {
            console.log(`${this.nome} está falando.`)
        },
        comer() {
            console.log(`${this.nome} está comendo.`)
        },
        beber() {
            console.log(`${this.nome} está bebendo.`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value: nome}, //vantagem porque pode usar writable, configurable
        sobrenome: {value: sobrenome}
    });
}

//Todas as pessoas que criarmos agora tem um __proto__ dentro com os 3 métodos que criamos
const p1 = criaPessoa('Luiz', 'Otávio');
p1.falar();
const p2 = criaPessoa('Gabriel', 'Silva');
p2.falar();