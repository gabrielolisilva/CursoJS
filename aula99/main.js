//Fazer um conta corrente e uma poupança e o método sacar se comportar diferente de uma para outra

//Super classe
function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente, ${this.saldo}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
}

Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo();
}

Conta.prototype.verSaldo = function (){
    console.log(`Ag/Banco: ${this.agencia}/${this.conta} Saldo:${this.saldo.toFixed(2)}`)
}

function ContaCorrente (agencia, conta, saldo, limite){
    Conta.call (this, agencia, conta, saldo) //herdando esses atributos da superclass Conta
    this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);//Linkando os prototypes
ContaCorrente.prototype.constructor = ContaCorrente;

//Sobreescrevendo o Método para se adapatar a uma conta corrente
ContaCorrente.prototype.sacar = function (valor){ 
    if(valor > this.saldo + this.limite){
        console.log(`Saldo insuficiente, ${this.saldo}`)
        return;
    } 

    this.saldo -= valor;
    this.verSaldo();
}

function ContaPoupança (agencia, conta, saldo){
    Conta.call (this, agencia, conta, saldo) //herdando esses atributos da superclass Conta
}

ContaPoupança.prototype = Object.create(Conta.prototype);//Linkando os prototypes
ContaPoupança.prototype.constructor = ContaPoupança;


const conta = new ContaCorrente(11, 22, 0, 100);
conta.depositar(10);
conta.sacar(110);
conta.sacar(1);

console.log('***********************')

const conta1 = new ContaPoupança(12, 33, 0);
conta1.depositar(10);
conta1.sacar(110);
conta1.sacar(1);
