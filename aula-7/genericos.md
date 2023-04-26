# Introdução
- Na aula anterior, aprendemos sobre módulos e suas utilizações em Typescript.
- Nessa aula, vamos aprender sobre genéricos em Typescript.

## Genéricos
- Genéricos são uma forma de definir tipos de forma dinâmica.
- Podem trabalhar com diferentes tipos de dados. 
- Isso significa que podemos criar código mais genérico e reutilizável, sem precisar definir um tipo específico para cada caso.

## Funções genéricas
- Podemos definir o tipo de um parâmetro de uma função utilizando a sintaxe `<tipo>`.
- Exemplo:
```typescript
function primeiroItem<T>(lista: T[]): T | undefined {
  return lista[0];
}

```
- Exemplo de utilização:
```typescript
let lista1: number[] = [1, 2, 3];
let lista2: string[] = ["a", "b", "c"];

console.log(primeiroItem(lista1));
console.log(primeiroItem(lista2));
```
## Classes genéricas
- Podemos definir o tipo de uma propriedade de uma classe utilizando a sintaxe `<tipo>`.
- De forma semelhante ao visto em funções.
- Exemplo:
```typescript
    class Pilha<T> {
        private lista: T[] = [];

        push(item: T) {
            this.lista.push(item);
        }

        pop(): T | undefined {
            return this.lista.pop();
        }
    }
```

- Exemplo de utilização:
```typescript
let pilha: Pilha<number> = new Pilha<number>();

pilha.push(1);
pilha.push(2);
pilha.push(3);
```
## Interfaces genéricas
- Podemos definir o tipo de uma propriedade de uma interface utilizando a sintaxe `<tipo>`.
- Exemplo:
```typescript
interface Comparavel<T> {
  maiorQue(item: T): boolean;
}

class Numero implements Comparavel<Numero> {
  constructor(private valor: number) {}

  maiorQue(item: Numero): boolean {
    return this.valor > item.valor;
  }
}
```
