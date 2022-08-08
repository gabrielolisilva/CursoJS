function meuEscopo(){
    const form = document.querySelector('form')
    const textoMudado = document.querySelector('#textoM')
    const peso = form.querySelector('#peso')
    const altura = form.querySelector('#altura')

    function eventoForm(evento){
        evento.preventDefault();
        let resultado = peso.value / (altura.value * altura.value)
        
        
        if (resultado < 18.5){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Abaixo do Peso`
        } else if (resultado >= 18.5 && resultado <= 24.9){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Peso Normal`
        } else if(resultado >= 25 && resultado <= 29.9){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Sobrepeso`
        } else if (resultado >= 30 && resultado <= 34.9){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Obesidade Grau 1`
        } else if(resultado >= 35 && resultado <= 39.9){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Obesidade Grau 2`
        } else if(resultado >= 40){
            textoMudado.innerHTML = `Seu IMC é de ${resultado.toFixed([2])} Obesidade Grau 3`
        }
    }

    form.addEventListener('submit', eventoForm);
}
meuEscopo();