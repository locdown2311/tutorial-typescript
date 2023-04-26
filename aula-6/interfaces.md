# Introdução
- Na aula anterior, aprendemos sobre classes e suas utilizações em Typescript.

# Interfaces
- As propriedades e métodos definidos na interface devem ter apenas a assinatura (nome e tipo), sem implementação.
- Para utilizar uma interface em uma classe, utilizamos a palavra-chave "implements" seguida do nome da interface.
- Exemplo:
```typescript
interface NomeDaInterface {
    propriedade1: tipo;
    propriedade2: tipo;

    metodo1(): tipo;
    metodo2(): tipo;
}
```
- Exemplo de interface que representa uma Pessoa:
```typescript
interface Pessoa {
    nome: string;
    idade: number;

    apresentar(): void;
}
```
- Exemplo de classe que implementa a interface Pessoa:
```typescript
class Pessoa implements Pessoa {
    nome: string;
    idade: number;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    apresentar() {
        console.log(`Olá, meu nome é ${this.nome} e eu tenho ${this.idade} anos.`);
    }
}
``` 