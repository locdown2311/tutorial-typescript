# Introdução:

- Na aula anterior, aprendemos sobre variáveis e tipos de dados em TypeScript.
- Nesta aula, vamos aprender sobre operadores em TypeScript.
- Os operadores são símbolos ou palavras reservadas que nos permitem realizar operações em valores e variáveis.

## Operadores aritméticos:

- Os operadores aritméticos são utilizados para realizar operações matemáticas.
- Os operadores aritméticos em TypeScript são: + (adição), - (subtração), * (multiplicação), / (divisão) e % (módulo).

### Adição:

- Para realizar uma adição em TypeScript, utilizamos o operador +.
  
    ```typescript
    let soma: number;
    soma = 1 + 2;
    ```
- O resultado da operação acima é 3.


### Subtração:

- Para realizar uma subtração em TypeScript, utilizamos o operador -.
  
    ```typescript
    let subtracao: number;
    subtracao = 2 - 1;
    ```
- O resultado da operação acima é 1.

### Multiplicação:

- Para realizar uma multiplicação em TypeScript, utilizamos o operador *.
  
    ```typescript
    let multiplicacao: number;
    multiplicacao = 2 * 2;
    ```

- O resultado da operação acima é 4.

### Divisão:

- Para realizar uma divisão em TypeScript, utilizamos o operador /.
  
    ```typescript
    let divisao: number;
    divisao = 10 / 2;
    ```
- O resultado da operação acima é 5.

### Módulo:

- Para realizar uma operação de módulo em TypeScript, utilizamos o operador %.
  
    ```typescript
    let modulo: number;
    modulo = 10 % 3;
    ```
- O resultado da operação acima é 1.
- O módulo é o resto da divisão de dois números.

## Operadores de atribuição:

- Os operadores de atribuição são utilizados para atribuir valores a variáveis.
- O operador de atribuição em TypeScript é o "=".
- Por exemplo, para atribuir o valor 10 a uma variável chamada "numero", podemos fazer:
    ```typescript
    let numero: number;
    numero = 10;
    ```

## Operadores de comparação:

- Os operadores de comparação são utilizados para comparar valores.
Os operadores de comparação em TypeScript são: 
- == (igualdade), 
- != (diferença), 
- \> (maior que),
- < (menor que),
- \>= (maior ou igual)
- <= (menor ou igual).

## Operadores lógicos:

- Os operadores lógicos são utilizados para combinar expressões lógicas.

### AND (E):

- O operador AND em TypeScript é o &&.
- Seu resultado é verdadeiro se as duas expressões forem verdadeiras.
- Por exemplo, para verificar se uma variável chamada "numero" é maior que 10 e menor que 20, podemos fazer:
    ```typescript
    let numero: number;
    numero = 15;
    let resultado: boolean;
    resultado = numero > 10 && numero < 20;
    ```
- O resultado da operação acima é verdadeiro.

### OR (OU):

- O operador OR em TypeScript é o ||.
- Seu resultado é verdadeiro se pelo menos uma das expressões for verdadeira.
- Por exemplo, para verificar se uma variável chamada "numero" é maior que 10 ou menor que 20, podemos fazer:
    ```typescript
    let numero: number;
    numero = 15;
    let resultado: boolean;
    resultado = numero > 10 || numero < 20;
    ```
- O resultado da operação acima é verdadeiro.

### NOT (NÃO):
- O operador NOT em TypeScript é o !.
- Seu resultado é o oposto da expressão.
- Por exemplo, para verificar o oposto de uma variável chamada "numero" ser maior que 10, podemos fazer:
    ```typescript
    let numero: number;
    numero = 15;
    let resultado: boolean;
    resultado = !(numero > 10);
    ```
- O resultado da operação acima é falso.


## Operador ternário:

- O operador ternário é um operador condicional que recebe três operandos.
- É uma versão simplificada de operadores de comparação.
- Por exemplo, para verificar se uma variável chamada "numero" é maior que 10, podemos fazer:
    ```typescript
    let numero: number;
    numero = 15;
    let resultado: boolean;
    resultado = numero > 10 ? true : false;
    ```
- O resultado da operação acima é verdadeiro.

