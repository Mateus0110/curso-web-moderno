function getInteiroAleatorio(min, max) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

// let opcao = -1
// também podemos apenas iniciar a variável
let opcao

do {
    opcao = getInteiroAleatorio(-1, 50)
    console.log(`Opção: ${opcao}`)
} while (opcao != -1)

console.log('Até a próxima!')