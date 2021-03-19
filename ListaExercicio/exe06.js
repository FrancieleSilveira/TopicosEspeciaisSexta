/* Criar um algoritmo que receba um valor positivo inteiro
e imprima a sequência Fibonacci até o valor lido.
Por exemplo, caso o usuário insira o número 15,
o programa deve imprimir na tela os números: 0, 1, 1, 2, 3, 5, 8, 13.
*/

let num = Math.floor(Math.random() * 100);
let result, prox = 1;

console.log(num);

for (let index = 0; index <= num; index = result) {
    result = index + prox;
    prox = index;
    console.log(index);
    }

