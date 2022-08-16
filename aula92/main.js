const produto = {nome: 'Produto', preco: 1.9};
Object.defineProperty(produto, 'nome', {
    writable: false
})
console.log(Object.getOwnPropertyDescriptor(produto, 'nome'))
console.log(Object.values(produto))
console.log(Object.entries(produto))