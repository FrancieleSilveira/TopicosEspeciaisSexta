/* Desenvolver um algoritmo para ler o valor inteiro da idade de uma pessoa
e imprimir uma das mensagens: se idade <=13: Criança,
se idade > 13 e <= 18: Adolescente, se idade > 18 e <= 60: Adulto e se idade > 60: Idoso. */

let idade = Math.floor(Math.random() * 100);

console.log(`Idade = ${idade} anos`);

if(idade <= 13) {
    console.log('Criança');
}
else if(idade <= 18) {
    console.log('Adolescente');
}
else if(idade <= 60) {
    console.log('Adulto');
}
else {
    console.log('Idoso');
}
