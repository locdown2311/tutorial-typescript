# Introdução
- Na aula anterior, aprendemos sobre funções em TypeScript.
- Nesta aula, vamos aprender sobre alguns tipos avançados em TypeScript.
  
## Tuplas:
- Tuplas são estruturas de dados que permitem armazenar um conjunto de valores de tipos diferentes.
- Para definir uma tupla, utilizamos a seguinte sintaxe:

    ```typescript
    let tupla: [number, string, boolean] = [1, "abc", true];
    ```
- No exemplo acima, temos uma tupla que armazena um número, uma string e um booleano.

## Enum:
- Enum é um tipo de dado que permite definir um conjunto de valores nomeados.
- Para definir um enum, utilizamos a seguinte sintaxe:

    ```typescript
    enum Cor {
        Vermelho,
        Verde,
        Azul
    }
    ```
- No exemplo acima, temos um enum que armazena os valores Vermelho, Verde e Azul.

Exemplo de utilização de enum:

    ```typescript
    let cor: Cor;
    cor = Cor.Vermelho;
    ```
- No exemplo acima, a variável cor recebe o valor Vermelho.

## Any:
- Any é um tipo de dado que permite armazenar qualquer tipo de valor.
- É útil em situações em que não sabemos o tipo de dados que uma variável pode receber.
- Para definir uma variável do tipo any, utilizamos a seguinte sintaxe:

    ```typescript
    let variavel: any;
    ```
- No exemplo acima, temos uma variável do tipo any.

## Object:
- Object é um tipo de dados em TypeScript que permite representar objetos com diferentes propriedades e valores.
- É útil em situações em que precisamos definir um objeto com um número variável de propriedades.
- Para definir uma variável do tipo object, utilizamos a seguinte sintaxe:

    ```typescript
    let variavel: object;
    ```
- No exemplo acima, temos uma variável do tipo object.
Exemplo de utilização de object:

    ```typescript
    let pessoa: object;
    pessoa = {
        nome: "João",
        idade: 20,
        endereco: {
            rua: "Rua A",
            numero: 123
        }
    };
    ```
- No exemplo acima, temos uma variável pessoa que armazena um objeto com as propriedades nome, idade e endereco.