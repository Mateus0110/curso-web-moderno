// var a;
console.log(`A: ${a}`);
var a = 2;
console.log(`A: ${a}`);

// Mesmo efeito
function teste() {
  console.log(`A: ${a}`);
  var a = 2;
  console.log(`A: ${a}`);
    
}

teste()

// Com o let -- Não ocorre
console.log(`B: ${b}`)
let b = 'Enzo'
console.log(`B: ${b}`)