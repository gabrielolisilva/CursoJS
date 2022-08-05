//coletar os dados em um objeto


function cadastrar(){
    let dadoNome = document.querySelector('#inome')
    let dadoSobrenome = document.querySelector('#isobrenome')
    let dadoPeso = document.querySelector('#ipeso')
    let dadoAltura = document.querySelector('#ialtura')
    let textoMudado = document.querySelector('#alterado')

    let lista = []

    const pessoa = {
        nome: dadoNome.value,
        sobrenome: dadoSobrenome.value,
        peso: dadoPeso.value,
        altura: dadoAltura.value
    }
    lista.push(pessoa)
    console.log(lista)
}

