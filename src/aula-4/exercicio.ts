// Q1
// Crie uma função que receba um array de números e retorne um array com os números pares elevados a 2.

function numerosParesAoQuadrado(array: number[]): number[] {
    let arrayParesAoQuadrado: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            arrayParesAoQuadrado.push(array[i] ** 2);
        }
    }
    return arrayParesAoQuadrado;
}

// Q2
// Crie uma função que receba um array de números e retorne o primeiro e o último elemento desse array como um novo array:

function primeiroEUltimo(array: number[]): number[] {
    let primeiroEUltimoArray: number[] = [];
    primeiroEUltimoArray.push(array[0]);
    primeiroEUltimoArray.push(array[array.length - 1]);
    return primeiroEUltimoArray;
}

// Q3
// Crie uma função que receba um array de números e retorne um novo array com todos os elementos divididos pela soma de toda a array:

function arrayDivididoPelaSoma(array: number[]): number[] {
    let arrayDividido: number[] = [];
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }
    for (let i = 0; i < array.length; i++) {
        arrayDividido.push(array[i] / soma);
    }
    return arrayDividido;
}