const fs = require('fs').promises;

module.exports = (caminho, dados) => {
    fs.writeFile(caminho, dados , {flag: 'w'}) 
}

//flag 'w' significa que se esse arquivo já existir ele irá apagar o que está escrito dentro e escrever dnv
//flag 'a' append, cada vez que executar gera adiciona
