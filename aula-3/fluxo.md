## Introdução
- Na aula anterior, aprendemos sobre variáveis e tipos de dados em TypeScript.
- Nessa aula aprenderemos sobre o controle de fluxo em TypeScript.
- O controle de fluxo é utilizado para controlar a ordem em que as instruções do código são executadas.

## Condicionais
- As condicionais são utilizadas para executar um bloco de código caso uma condição seja verdadeira.
  
### if e else
- Para criar uma condicional em TypeScript, podemos utilizar a palavra reservada if.
- Exemplo:
  
    ```typescript
    let x: number = 10;

    if (x > 5) {
    console.log("x é maior que 5");
    } else {
    console.log("x é menor ou igual a 5");
    }

    ```
- O código acima irá imprimir a mensagem "x é maior que 5" no console.
- Podemos utilizar a palavra reservada else para executar um bloco de código caso a condição do if seja falsa.

### switch e case
- Para criar uma condicional em TypeScript, também podemos utilizar a palavra reservada switch.
- Cada condição a ser verificada é representada por um case.
- Exemplo:
      
     ```typescript
     let x: number = 10;
    
     switch (x) {
     case 1:
          console.log("x é igual a 1");
          break;
     case 2:
          console.log("x é igual a 2");
          break;
     case 3:
          console.log("x é igual a 3");
          break;
     default:
          console.log("x não é igual a 1, 2 ou 3");
     }
    
     ```
- O código acima irá imprimir a mensagem "x não é igual a 1, 2 ou 3" no console.
- É checado se o valor de x é igual a cada um dos casos escritos
- Caso não se encaixe em nenhum deles, o bloco de código do default é executado.

## Laços de repetição
- Os laços de repetição são utilizados para executar um bloco de código várias vezes.
- Existem 3 tipos de laços de repetição em TypeScript: for, while e do while.

### for
- Para criar um laço de repetição em TypeScript, podemos utilizar a palavra reservada for.
- Sintaxe do for:
  
    ```typescript
    for (inicialização da variável; condição de parada; incremento) {
        // bloco de código
    }
    ```
- Exemplo:
  
    ```typescript
    for (let i: number = 0; i < 10; i++) {
        console.log(i);
    }
    ```
### while
- Para criar um laço de repetição em TypeScript, também podemos utilizar a palavra reservada while.
- Sintáxe do while:
  
    ```typescript
    while (condição) {
        // bloco de código
    }
    ```
- Diferentemente do for, o while não possui inicialização da variável e incremento.
- Logo, os mesmos devem ser feitos manualmente.
- Exemplo:
  
    ```typescript
    let i: number = 0;
    while (i < 10) {
        console.log(i);
        i++;
    }
    ```
### do while
- Para criar um laço de repetição em TypeScript, também podemos utilizar a palavra reservada do while.
- Sintáxe do while:
- Diferente do anterior, o do while executa o bloco de código pelo menos uma vez.
  
    ```typescript
    do {
        // bloco de código
    } while (condição);
    ```
- Exemplo:
  
    ```typescript
    let i: number = 0;
    do {
        console.log(i);
        i++;
    } while (i < 10);
    ```

## Exercícios
- Crie um programa que imprima todos os números pares de 0 a 100. (Dica: utilize o operador módulo %)
- Crie um programa que imprima na tela os números pares de 1 a 20 utilizando um loop while.
- Escreva um programa que imprima na tela a tabuada de multiplicação de um número. Utilize um loop for para gerar a tabuada. (Sugestão de número: 7)
- Escreva um programa que calcule a média aritmética de uma lista de números fornecidos pelo usuário. Utilize um loop while para ler os números fornecidos e um loop for para calcular a média. (Dica: utilize o operador += para acumular os valores lidos no vetor.)