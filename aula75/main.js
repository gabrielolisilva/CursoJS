//Factory Functions
function criaPessoa (nome, sobrenome, a, p){
    return {
        nome,

        sobrenome,

        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`;
        },

        set nomeCompleto(valor){
            valor = valor.split(' '); //separa as palavras entre espaços em arrays, valor vira array
            this.nome = valor.shift(); //tirando o primeiro valor do array e jogando dentro de nome
            this.sobrenome = valor.join(' '); //juntando o array valor denovo em sobrenome
            console.log(valor);
        },

        fala: function(assunto){
            return `${nome} pesa ${this.peso} e está ${assunto}` //esse this se refere ao peso dentro da função.
        },

        altura: a,

        peso: p,

        get imc(){ //getter, fingir que ele é um atributo
            const indice = this.peso / (this.altura * this.altura);
            return indice.toFixed(2);
        }
    }
}

const p1 = criaPessoa ('Gabriel', 'Silva', 1.8, 80)
console.log(p1.imc);
console.log(p1.fala('falando sobre JS'))
console.log(p1.peso) //isso é a msm coisa que this.peso 
p1.nomeCompleto = 'Gabriel Silvaaa Almeida Santos';
console.log(p1.sobrenome)