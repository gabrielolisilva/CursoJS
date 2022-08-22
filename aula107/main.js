const botaoEnviar = document.querySelector('.enviar')
const campoNome = document.getElementById("nome")
const campoSobrenome = document.getElementById("sobrenome")
const campoCPF = document.getElementById("cpf")
const campoUsuario = document.getElementById("usuario")
const campoSenha = document.getElementById("senha")
const campoRepetirSenha = document.getElementById("repetirsenha")


botaoEnviar.addEventListener('click', function(){
    if(campoNome.value.length === 0 || campoSobrenome.value.length === 0 || campoCPF.value.length === 0 || campoUsuario.value.length === 0 || campoUsuario.value.length === 0 || campoSenha.value.length === 0 ||campoRepetirSenha.value.length === 0){
        alert('Campo Vazio')
    } else {
        alert('Campo Preenchido')
    }
})