//Pegar cpf guardar em uma variável em forma de string
//Colocar o cpf em outra variável sem ponto ou traço
//Transformar cpf em array
//Criar um ciclo que vai de 10 a 2 e multiplicar cada ciclo pelo array do número
//Somar essa multiplicação
//Colocar o total na fórmula e obter o primeiro resultado

let cpf = '705.484.450-52';
let cpfLimpo = cpf.replace(/\D+/g, '');
cpfArray = Array.from(cpfLimpo);
cpfRemovidos = cpfArray.splice(-2, 2);

for(let valor of cpfArray){
    for(let i = 10; i > 1; i--){
        console.log(`${valor} ${i}`)
    }
}
