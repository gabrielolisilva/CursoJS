function criaHoraDosSegundos (segundos){
    const data = new Date(segundos * 1000); // * 1000 para passar os segundos recebidos para milisegundos
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC' //coloca o fuso horário de fora e não do brasil
    });
}

const dadoTimer = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function(){
        segundos ++;
        dadoTimer.innerHTML = criaHoraDosSegundos(segundos);
    }, 1000);
}

iniciar.addEventListener('click', function(evento){
    iniciaRelogio();
})

pausar.addEventListener('click', function(evento){
    clearInterval(timer);
})

zerar.addEventListener('click', function(evento){
    segundos = 0;
    clearInterval(timer);
    dadoTimer.innerHTML = `00:00:00`;
})