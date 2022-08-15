function Calculadora (){ //função faz o papel do molde
    this.display = document.querySelector('.display');

    this.capturaEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13 && !el.classList.contains('btn-eq')) return;
            this.realizaConta();
        })
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event =>{
            const el = event.target;
            
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear();
            if (el.classList.contains('btn-del')) this.del();
            if (el.classList.contains('btn-eq')) this.realizaConta();
        })
    }

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    } 
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.realizaConta = function (){
        let conta = this.display.value;

        try{
            conta = eval(conta);

            if(!conta){
                alert('Conta inválida')
                return;
            }

            this.display.value = conta;
        }catch(e){
            alert('Conta inválida');
            return;
        }
    }

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    }
}

const calculadora = new Calculadora(); //calculadora virando um objeto
calculadora.inicia();
