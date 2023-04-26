# Introdução
- Na aula anterior, aprendemos sobre interfaces e suas utilizações em Typescript.
- Nessa aula, vamos aprender sobre módulos em Typescript.

## Módulos
- Módulos são arquivos que contém código Typescript.
- Eles são uma forma de dividir o código em arquivos independentes e reutilizáveis.
- Podem ser definidos utilizando a palavra-chave "export" antes de uma classe, interface, função ou variável.
- Podem ser importados utilizando a palavra-chave "import" seguida do nome da classe, interface, função ou variável.
- Exemplo de módulo:
```typescript
export class Pessoa {
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
- Exemplo de importação de um módulo:
```typescript
import { Pessoa } from "./pessoa";

let pessoa: Pessoa;
pessoa = new Pessoa("João", 20);
pessoa.apresentar();
```
- Exemplo de importação de um módulo com alias:
```typescript
import { Pessoa as PessoaFisica } from "./pessoa";

let pessoa: PessoaFisica;
pessoa = new PessoaFisica("João", 20);
pessoa.apresentar();
```
- Exemplo de importação de um módulo com alias e importação de todos os elementos:
```typescript
import * as Pessoa from "./pessoa";

let pessoa: Pessoa.Pessoa;
pessoa = new Pessoa.Pessoa("João", 20);
pessoa.apresentar();
```

