// 01) Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

(function (a, b) {
    console.log(a + b)
    console.log(a - b)
    console.log(a * b)
    console.log(a / b)
})(5, 5)

console.log('\n')


// 02) Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados: 
// Equilátero: Os três lados são iguais.
// Isósceles: Dois lados iguais.
// Escaleno: Todos os lados são diferentes.
// Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um triângulo).

function classificacaoTriangulo(ladoA = 0, ladoB = 0, ladoC = 0) {
    let array = [ladoA, ladoB, ladoC]
    let [a, b, c] = array.sort()

    if (a == b && a == c) {
        return 'Equilátero'
    } else if (a == b && a != c) {
        return 'Isósceles'
    } else {
        return 'Escaleno'
    }
}

console.log(classificacaoTriangulo())
console.log(classificacaoTriangulo(10, 10, 10))
console.log(classificacaoTriangulo(5, 5, 6))
console.log(classificacaoTriangulo(5, 9, 1))

console.log('\n')

// 03) Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente.
const elevado1 = (base, expoente) => Math.pow(base, expoente)
console.log(elevado1(5, 2))

console.log('\n')

// 04) Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado e o resto da divisão destes dois valores.
function DivisaoEResto1(dividendo, divisor) {
    this.calculo = function () {
        return {
            divisao: dividendo / divisor,
            resto: dividendo % divisor
        }
    }
}

console.log(new DivisaoEResto1(5, 2).calculo())
console.log(new DivisaoEResto1(7, 2).calculo())

console.log('\n')

// 05) Lidar com números em JavaScript pode dar muita dor de cabeça. Você já viu o que acontece quando faz o seguinte comando no console: console.log(0.1 + 0.2); O resultado será: 0.30000000000000004. Outra coisa importante de observar, é o fato que o ponto é utilizado no lugar da vírgula e vice versa. Com isso, vamos fazer um exercício simples para mostrar dinheiro sempre da forma correta. Desenvolva uma função JavaScript para que ela receba um valor como 0.30000000000000004 e retorne R$0,30 (observe a vírgula e o ponto).
const formatarDinheiro1 = function(valor) {
    return `R$ ${valor.toFixed(2)}`.replace('.', ',')
}

console.log(formatarDinheiro1(.5))
console.log(formatarDinheiro1(.25))
console.log(formatarDinheiro1(5.32))

console.log('\n')

// 06) Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda retornará o valor da aplicação sob o regime de juros compostos.
function jurosSimples(capital, taxa, tempo) {
    let montante = capital * taxa * tempo

    return montante
}

function jurosCompostos(capital, taxa, tempo) {
    let montante = (capital * Math.pow((1 + taxa), tempo)).toFixed(3)

    return montante
}

console.log(jurosSimples(600, .12, 5))
console.log(jurosCompostos(1.400, .07, 2))

console.log('\n')

// 07) Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar. Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12. Como retorno deve ser passado um vetor que tem 2 valores um para cada possível resultado, mesmo que os resultados sejam iguais. Caso o delta seja negativo, retorne, ao invés do vetor, um string com a frase: “Delta é negativo”.
function Bhaskara(ax2, bx, c) {
    this.delta = function () {        
        const Delta = Math.pow(bx, 2) - 4 * ax2 * c > 0 ? Math.pow(bx, 2) - 4 * ax2 * c : false
        
        return Delta
    }

    this.calculoBhaskara = function () {
        let delta = this.delta()
        
        if (delta) {
            return {
                positivo: function () {
                    return (-bx + Math.sqrt(Math.pow(ax2, 2)+ delta)) / 2 * ax2
                },

                negativo: function () {
                    return (-bx - Math.sqrt(Math.pow(ax2, 2)+ delta)) / 2 * ax2
                }
            }

        } else {
            return 'Operação Inválida: Delta é negativo'
        }
    }
}

console.log(new Bhaskara(4, 2, -6).calculoBhaskara().positivo())
console.log(new Bhaskara(4, 2, -6).calculoBhaskara().negativo())