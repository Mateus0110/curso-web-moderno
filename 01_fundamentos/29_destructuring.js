// novo recurso ES2015

const pessoa = {
  nome: 'Enzo Evangelista',
  idade: 17,
  endereco: {
    logradouro: 'Rua ABC',
    numero: 1000
  }
}

// Destructuring em Objetos
const { nome, idade } = pessoa
console.log(nome, idade)

// Renomeando variáveis
const { nome: n, idade: i } = pessoa
console.log(n, i)

// Valor padrão para variáveis que não existem
const { sobrenome, bemHumorado = true } = pessoa
console.log(sobrenome, bemHumorado)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)

const { conta: { ag, num } } = pessoa
console.log(ag, num)