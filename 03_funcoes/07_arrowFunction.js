let dobro = function (a) {
    return 2 * a
}

// função arrow padrão
dobro = (a) => {
    return 2 * a
}

// retorno implícito e com único parâmetro
dobro = a => 2 * a

console.log(dobro(Math.PI))

// Função anônima
let ola = function () {
    return 'Olá'
}

// Mesma função acima, só que no modelo Arrow.
ola = () => 'Olá'
ola = _ => 'Olá' // possui um parâmetro

console.log(ola())