function mostraHora(){
    const data = new Date();
    
    return data.toLocaleTimeString('pt-BR', {
       hour12: false 
    });
}

const timer = setInterval(function(){
    console.log(mostraHora());
}, 1000)

setTimeout(function(){
    clearInterval(timer);
}, 6000);

setTimeout(function(){
    console.log('Acabou');
}, 6000);