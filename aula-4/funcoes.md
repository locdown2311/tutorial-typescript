# Introdução:
- Na aula anterior, aprendemos sobre controle de fluxo em TypeScript.
- Nesta aula, vamos aprender sobre funções em TypeScript.
- Funções são blocos de código que podem ser chamados em diferentes partes do programa.
  
# Sintaxe de uma função:

- Para criar uma função em TypeScript, utilizamos a palavra reservada function.

    ```typescript
    function nomeDaFuncao() {
        // código da função
    }
    ```
- Para chamar uma função em TypeScript, utilizamos o nome da função seguido de parênteses.

    ```typescript
    nomeDaFuncao();
    ```
## Parâmetros e retorno de funções:
- Funções podem receber parâmetros, que são valores que podem ser utilizados dentro da função.

    ```typescript
    function nomeDaFuncao(parametro1, parametro2) {
        // código da função
    }
    ```
- Para chamar uma função que recebe parâmetros, utilizamos o nome da função seguido de parênteses e os valores dos parâmetros.

    ```typescript
    nomeDaFuncao(valor1, valor2);
    ```
- Funções podem retornar valores, que são valores que podem ser utilizados fora da função.

    ```typescript
    function nomeDaFuncao(parametro1, parametro2) {
        let soma: number;
        soma = parametro1 + parametro2;
        return soma;
    }
    ```
- Para chamar uma função que retorna valores, podemos armazenar o valor retornado em uma variável.

    ```typescript
    let variavel = nomeDaFuncao(valor1, valor2);
    ```

## Parametros opcionais:
- Podemos definir parâmetros opcionais em uma função.
- Para isso, basta adicionar um ponto de interrogação após o nome do parâmetro.

```typescript
function nomeDaFuncao(parametro1?, parametro2?) {
    // código da função
}
```