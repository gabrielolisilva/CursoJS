//Métodos Estáticos, métodos que você pode acessar na classe sem instanciar a class (new)
class ControleRemoto{
    constructor(tv) {
        this.tv = tv; //mesma coisa que escrever ControleRemoto.tv = tv;
        this.volume = 0;
    }
    //Método de instância
    aumentarVolumero (){
        this.volume += 2;
    }
    //Método de instância
    diminuirVolumero (){
        this.volume -= 2;
    }
    //Método Estático, só consigo acessar ele pela classe
    static trocaPilha(){
        console.log('Ok, vou trocar')
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolumero()
console.log(controle1)
ControleRemoto.trocaPilha(); //Acessando o método trocaPilha somente pelo nome da classe, por estar fazendo isso não temos acesso aos dados dentro da classe