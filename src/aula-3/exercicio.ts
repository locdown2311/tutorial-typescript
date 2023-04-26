// Q1

let numeros: number[] = [];

for (let i = 0; i <= 100; i++) {
    if (i % 2 === 0) {
        numeros.push(i);
    }
}

console.log("Numeros de 0 a 100 que são pares: ",numeros);


// Q2
// - Crie um programa que imprima na tela os números pares de 1 a 20 utilizando um loop while.

let i = 0;
while (i <= 20) {
    if (i % 2 === 0) {
        console.log(i);
    }
    i++;
}

// Q3
// - Escreva um programa que imprima na tela a tabuada de multiplicação de um número. Utilize um loop for para gerar a tabuada. (Sugestão de número: 7)

let numero = 7;
for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
// Q4
// Escreva um programa que calcule a média aritmética de uma lista de números fornecidos pelo usuário. Utilize um loop while para ler os números fornecidos e um loop for para calcular a média. (Dica: utilize o operador += para acumular os valores lidos no vetor.)

let numerosUsuario: number[] = [];
let soma = 0;
let media = 0;
let i2 = 0;

while (i2 < 5) {
    numerosUsuario.push(Number(prompt("Digite um número: ")));
    soma += numerosUsuario[i2];
    i2++;
}

