//elem negativos -5       -4       -3         -2        -1
//elem positivos  0        1        2          3         4
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

//nomes.splice(índice(começo), qts elementos quero apagar, elementos para adicionar)

//pop
//const removidos = nomes.splice(3, 2) - ela retorna um array
//const removidos = nomes.splice(-2, 1)
//const removidos = nomes.splice(2,Number.MAX_VALUE) - number max value é o maior número que tem no js, então não importa o tamanho do array, ele vai até o final
//const removidos = nomes.splice(3, 0, 'Luiz') - ele adicionou Luiz no local 3 que passei e Gabriel vira índice 4
//const removidos = nomes.splice(3, 1, 'Luiz') - remove Gabriel do 3 e adiciona Luiz
const removidos = nomes.splice(3, 2, 'Luiz', 'Silva')
console.log(nomes, removidos);