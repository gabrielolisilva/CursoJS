const dadoTimer = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

let sec = 00;
let min = 00;
let hora = 00;
let intervalo;

function numeroZero(num){
    numero = num < 10 ? `0${num}` : `${num}`;
    return numero;
}

function contar(){
    sec++
    if(sec === 60){
        min++
        sec = 0
    } else if(min === 60){
        hora++
        min = 0
    }
    dadoTimer.innerHTML = `${numeroZero(hora)}:${numeroZero(min)}:${numeroZero(sec)}`
}

iniciar.addEventListener('click', function(evento){
    intervalo = setInterval(contar, 1000)
})

pausar.addEventListener('click', function(evento){
    setTimeout(function(){
    clearInterval(intervalo), 0})
})

zerar.addEventListener('click', function(evento){
    sec = 00;
    min = 00;
    hora = 00;
    dadoTimer.innerHTML = `${numeroZero(hora)}:${numeroZero(min)}:${numeroZero(sec)}`
})