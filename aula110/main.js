function rand (min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi (msg, tempo) {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
        if(typeof msg !== 'string'){
             reject ('CAI NO ERRO');
             return;
            };

            //then atrelado ao resolve da função
            resolve(msg.toUpperCase() + '- Passei na promise');
        }, tempo)
    });
}

//execução das tarefas em ordem
async function executa(){
    try{ //atrelado ao resolve
        //só vai passar para a fase 2 quando a fase 1 terminar
        const fase1 = await esperaAi('Fase1', rand(0, 3)); 
        console.log(fase1)
    
        const fase2 = await esperaAi('Fase2', rand(0, 3));
        console.log(fase2)
    
        const fase3 = await esperaAi(2, rand(0, 3));
        console.log(fase3)
    
        console.log('Terminamos na fase:', fase3)
    } catch (e){ //atrelado ao reject
        console.log(e)
    }  
}

executa();