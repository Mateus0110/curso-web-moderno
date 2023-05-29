const nome = 'Rebeca'
const concatecanao = 'Olá ' + nome + '!'
const template = `
    Olá
    ${nome}!`

console.log(concatecanao, template)

// expressões
console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei...${up('cuidado')}!`)