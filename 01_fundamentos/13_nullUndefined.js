let valor // não inicializada
console.log(valor)

valor = null // ausência de valor
console.log(null)
// console.log(valor.toString()) // Erro!

const produto = {}
console.log(produto.preco)
// console.log(produto.preco.a) // Erro
console.log(produto)

produto.preco = 3.50
console.log(produto)

produto.preco = undefined // evite atribuir undefined
console.log(!!produto.preco)
// delete produto.preco
console.log(produto)

produto.preco = null // sem preço (use o null, e não o undefined)
console.log(!!produto.preco)
console.log(produto)