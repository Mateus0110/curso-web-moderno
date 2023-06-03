// Função sem retorno
function imprimirSoma(a, b) {
  console.log(a + b);
}

imprimirSoma(2, 3);
imprimirSoma(2); // NaN
imprimirSoma(2, 3, 4, 5, 6, 7, 8); // Soma os dois primeiros
imprimirSoma(); // NaN

// Função com retorno
function soma(a, b = 1) {
  return a + b;
}

console.log(soma(2, 3));
console.log(soma(2));
