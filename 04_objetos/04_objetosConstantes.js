// pessoa -> 123 -> { ... }
const pessoa = { nome: 'João' }
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa <- 456 -> { ... }
// pessoa = { nome: "Ana" }

Object.freeze(pessoa) // Congelado. Ou seja, não é possível alterar, adicionar ou remover.
pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome
console.log(pessoa)

const pessoaConstante = Object.freeze({ nome: 'João' }) // Congelado de nascença 