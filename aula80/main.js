/*
function* geradora1(){
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}

const g1 = geradora1();
console.log(g1.next()) - método da função geradora para acessar valor, done sendo false significa que a função n terminou de entregar tudo
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

for (let valor of g1){
    console.log(valor);
}

function* geradora3(){
    yield 0;
    yield 1;
    yield 2;
}

function* geradora4(){ //g4 usa a g3, assim que a g3 terminar ela continua
    yield* geradora3();
    yield 3;
    yield 4;
    yield 5;
}

const g4 = geradora4();
for (let valor of g4){
    console.log(valor)
}
*/

function* geradora5() {
    yield function(){
        console.log('Vim do y1')
    }

    yield function(){
        console.log('Vim do y2')
    }
}

const g5 = geradora5();
const func1 = g5.next().value;
const func2 = g5.next().value;
func1();
func2();