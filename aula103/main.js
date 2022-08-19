const _velocidade = Symbol(); //Criar uma chave privada dentro do seu objeto, fazendo com que ela não possa ser alterada fora do objeto
class Carro {
    constructor (nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }
    //permite que você altere o valor da velocidade fora do objeto
    set velocidade(valor){
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade] = valor;
    }

    get velocidade(){ //permite acessar o valor da velocidade fora do objeto
        return this[_velocidade];
    }

    acelerar(){
        if(this[_velocidade] >= 100) return;
        this[_velocidade]++;
    }

    freiar(){
        if(this[_velocidade] <= 0) return;
        this[_velocidade]--;
    }
}

const c1 = new Carro('Fusca');

c1.velocidade = 98; //setter, atribuindo um valor a velocidade
console.log(c1.velocidade); //getter, consultando o valor da velocidade