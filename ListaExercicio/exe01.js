// let altura = 10;
// let largura = 5;

let altura = Math.floor(Math.random() * 100);
let largura = Math.floor(Math.random() * 100);
let area = altura * largura;

console.log(altura, largura, area);
console.log("Área: " + area + " m2"); // Concatenação

                                // Mais usado
console.log(`Área: ${area} m2`) // Interpolação - Template Literals (termo usado no JS)
                                // Interpolação usa ``