# Introdução:

Nesta primeira aula, vamos aprender sobre variáveis e tipos de dados em TypeScript.
Vamos começar entendendo o que são variáveis e para que servem.

## O que são variáveis:

Variáveis são espaços de memória que armazenam dados.
Esses dados podem ser alterados ao longo da execução do programa.
Em TypeScript, as variáveis são declaradas utilizando a palavra-chave "let".

## Declaração de variáveis:

Para declarar uma variável em TypeScript, utilizamos a palavra-chave "let" seguida do nome da variável e, opcionalmente, do tipo de dados que ela irá armazenar.
Por exemplo, para declarar uma variável do tipo string, podemos fazer:

```typescript
let nome: string;
```
## Tipos de dados:
TypeScript possui vários tipos de dados diferentes.
Alguns exemplos de tipos de dados são: 
- string
- number
- boolean
- null
- undefined
- array
- object

Vamos ver alguns exemplos de como utilizar esses tipos de dados.

### String:
```typescript
let nome: string;
nome = "João";
```
### Number:
```typescript
let idade: number;
idade = 20;
```
### Boolean:
```typescript
let maiorDeIdade: boolean;
maiorDeIdade = true;
```
### Null:
```typescript
let nulo: null;
nulo = null;
```
### Undefined:
```typescript
let indefinido: undefined;
indefinido = undefined;
```

## Tipos avançados:
### Array:
```typescript
let frutas: string[];
frutas = ["maçã", "banana", "laranja"];
```
### Object:
```typescript
let pessoa: object;
pessoa = {
    nome: "João",
    idade: 20
};
```

### Tipos diferentes
```typescript
let pessoa: [string, number] = ["João", 25];
```

## Atribuição de valores: