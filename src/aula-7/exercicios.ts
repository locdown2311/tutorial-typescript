// Q1
// Cria uma função de tipo generico T que receba um valor e retorne um boolean indicando se ele é par ou não.

function ehPar<T>(valor: T): boolean {
    if (typeof valor === "number") {
        return valor % 2 === 0;
    }
    return false;
}

// Q2
// Crie uma função de tipo generico T que faca o mesmo que a função do exercicio 1, mas que receba um array de valores e retorne um array de booleanos indicando se eles são pares ou não.

function ehParArray<T>(valores: T[]): boolean[] {
    return valores.map(ehPar);
}

// Q3 
// Crie uma classe generica do tipo T que represente uma lista encadeada
// Implemente os métodos de adicionar um valor, remover um valor e imprimir a lista

class ListaEncadeada<T> {

    private lista: T[] = [];

    public adicionaValor(valor: T): void {
        this.lista.push(valor);
    }

    public removeValor(valor: T): void {
        const indice = this.lista.indexOf(valor);
        if (indice > -1) {
            this.lista.splice(indice, 1);
        }
    }

    public imprimeLista(): void {
        console.log(this.lista);
    }
}

// Q4
// Crie uma função generica do tipo T que receba um array de valores do tipo T e retorne um array com os valores que são pares.
// Exporte a função para que ela possa ser usada em outros arquivos.

export function filtraPares<T>(valores: T[]): T[] {
    return valores.filter(ehPar);
}