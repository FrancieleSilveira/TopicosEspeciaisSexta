// Crie um algoritmo que permita fazer três conversões monetárias.
// O algoritmmo deve receber o valor em real (R$) e apresentar os valores convertidos em:
// a) Dólar (1 dólar = 3,78 reais)
// b) Euro (1 euro = 4,21 reais)
// c) Peso argentino (1 peso argentino = 0,08 reais)

let real = Math.floor(Math.random() * 100);
let dolar = real / 3.78;
let euro = real / 4.21;
let peso = real / 0.08;

console.log(real);

// Interpolação - Template Literals
console.log(`Dólar: ${dolar.toFixed(2)}`);
console.log(`Euro: ${euro.toFixed(2)}`);
console.log(`Peso: ${peso.toFixed(2)}`);