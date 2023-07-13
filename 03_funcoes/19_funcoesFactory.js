function criarProduto(nome = 'Não informado.', preco = 'Não informado.') {
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook', 1234))