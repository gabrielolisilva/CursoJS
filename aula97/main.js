function validarCPF (cpf){
    cpf = cpf.replace(/[^\d]+/g,'');
    if (cpf.length !== 11) console.log('CPF inválido');
    if (isSequencia(cpf)) console.log('CPF inválido');

    //Valida 1o digito
    let total = 0;
    for(let i = 0; i < 9; i++){
        total += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let digito1 = 11 - (total % 11);
    if (digito1 == 10 || digito1 == 11){
        digito1 = 0
    }
    if (digito1 !== parseInt(cpf.charAt(9))){
        return false;
    }

    //Valida 2o digito
    let total1 = 0;
    for(let i = 0; i < 10; i++){
        total1 += parseInt(cpf.charAt(i)) * (11 - i)
    }
    let digito2 = 11 - (total1 % 11);
    if (digito2 == 10 || digito2 === 11){
        digito2 = 0;
    }
    if (digito2 !== parseInt(cpf.charAt(10))){
        return false;
    }
    return true;
}

function isSequencia(valor){
    const sequencia = valor[0].repeat(valor.length);
    return sequencia === valor;
}

const receberCPF = '705.484.450-52';

if(validarCPF(receberCPF)){
    console.log('CPF Válido')
} else {
    console.log('CPF Inválido')
}