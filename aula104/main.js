class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if(this.ligado) {
            console.log(`${this.nome} já ligado`)
            return
        };
        this.ligado = true;
    }

    desligar(){
        if(!this.ligado) {
            console.log(`${this.nome} já desligado`)
            return
        };
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico { //Class smartphone herdou tudo de Dispositivo
    constructor(nome, cor, modelo){
        super(nome); //indicando que a super classe DispositivoEletronico já tem o parâmetro nome
        this.cor = cor;
        this.modelo = modelo;
    }

    ligar () {
        console.log('Você alterou o método ligar')
    }

    falarOI () {
        console.log('Método falarOI foi adicionado a classe Smartphone')
    }
}

const s1 = new Smartphone('Samsung', 'Preto', 'S21')
s1.ligar()
s1.falarOI()