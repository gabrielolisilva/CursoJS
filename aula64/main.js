/*try{
    console.log(valor1)
    console.log('Abri um Arquivo');
    console.log('Manipulei o arquivo e gerou erro');
    console.log('Fechei o Arquivo');
} catch (e){
    console.log('Tratando o erro');
} finally {
    console.log('Eu sempre sou executado');
}
*/

function retornaHora (data){
    if (data && !(data instanceof Date)){ //se tiver um valor da data mas não for do tipo date
        throw new TypeError('Esperando Instância de Date.')
    }

    if(!data){ //se não colocar nenhum valor criar uma data de agora
        data = new Date();
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    });
}

try{
    const hora = retornaHora(11)
    console.log(hora)
} catch(err){ //ele pega o erro que deu colocamos na linha 15
    console.log('O valor inserido não é válido')
    console.log(err)
}

