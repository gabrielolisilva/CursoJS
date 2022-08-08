function meuEscopo(){
    const form = document.querySelector('form')
    const lista = []
    let textoMudado = document.querySelector('#textoM')
    
    function recebeEventoForm(evento){
        evento.preventDefault(); // essa linha não deixar enviar o formulário evitando que a página seja recarregada
        const nome = form.querySelector('#nome')
        const sobrenome = form.querySelector('#sobrenome')
        const peso = form.querySelector('#peso')
        const altura = form.querySelector('#altura')

        let pessoa = {
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        }
        console.log(pessoa)

        lista.push(pessoa)

        textoMudado.innerHTML += `${pessoa.nome} ${pessoa.sobrenome} ${pessoa.peso} ${pessoa.altura} <br>`

        console.log(lista)
    }

    form.addEventListener('submit', recebeEventoForm);// qd clicar em enviar aciona a função recebeEventoForm
}
meuEscopo();