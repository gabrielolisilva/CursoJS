function recursiva(valor){
    if(valor > 10) return;
    console.log(valor)
    valor++;
    recursiva(valor); //faz o looping nessa linha para ela continuar rodando
}

recursiva(1);