function criaCalculadora(){
    return {
        display: document.querySelector('.display'),

        btnClear: document.querySelector('.btn-clear'),

        inicia(){
            this.cliqueBotoes();
            this.pressionaEnter();
        },

        clearDisplay(){
            this.display.value = '';
        },

        apagaUm(){
            this.display.value = this.display.value.slice(0, -1);//tamanho da string -1
        },

        realizaConta(){
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
        },

        pressionaEnter(){
            this.display.addEventListener('keyup', e => {
                if (e.keyCode === 13){
                    this.realizaConta();
                }
            })
        },

        cliqueBotoes(){
            document.addEventListener('click', e => { //arrow function this antigo continua sendo o this novo
                const el = e.target;
                console.log(el)
                if(el.classList.contains('btn-num')){
                    this.btnParaDisplay(el.innerText);
                }

                if(el.classList.contains('btn-clear')){
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')){
                    this.apagaUm();
                }

                if(el.classList.contains('btn-eq')){
                    this.realizaConta();
                }
            }); //linha para que o this se refira a calculadora e não ao document
        },

        btnParaDisplay(valor){
            this.display.value += valor;
        }
    };
}

const calculadora = criaCalculadora();
calculadora.inicia();