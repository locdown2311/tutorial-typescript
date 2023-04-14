/**
 * Escreva um programa que calcule a média aritmética de uma lista de números fornecidos pelo usuário. 
 * Utilize um loop while para ler os números fornecidos e um loop for para calcular a média. 
 */

const exec1 = () => {
    let numbers: number[] = [];
    let input = prompt('Insira um número:');

    while (input !== '0') {
        numbers.push(Number(input));
        input = prompt('Insira um número:');
    }

    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const average = sum / numbers.length;
    console.log(`A média é ${average}`);
    return average;
}