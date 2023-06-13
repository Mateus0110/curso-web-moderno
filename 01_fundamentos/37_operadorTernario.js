// Arrow com corpo
const resultadoCorpo = nota => {
    return nota >= 7 ? 'Aprovado' : 'Reprovado'
}

// return implícito
const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultadoCorpo(7.1))
console.log(resultado(6.7))

// // // // // //
const nota = 8
const status = nota >= 7 ? 'Aprovado' : 'Reprovado'
console.log(status)