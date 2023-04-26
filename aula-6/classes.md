# Introdução
- Na aula anterior, aprendemos sobre tipos de dados avançados em TypeScript.
- Nesta aula, vamos aprender sobre classes em TypeScript.

## Classes
- Classes são estruturas que permitem definir objetos com propriedades e métodos.
- Em outras palavras, classes são modelos para a criação de objetos.

## Definindo uma classe
- Para definir uma classe em TypeScript, utilizamos a palavra reservada class.
- Exemplo:

    ```typescript
    class NomeDaClasse {
        propriedade1: tipo;
        propriedade2: tipo;

        constructor(valor1: tipo, valor2: tipo) {
            this.propriedade1 = valor1;
            this.propriedade2 = valor2;
        }

        metodo1() {
            // Código do método 1
        }

        metodo2() {
            // Código do método 2
        }
    }
    ```
- No exemplo acima, temos a definição de uma classe com duas propriedades e dois métodos.
- Exemplo de classe que representa uma Pessoa:
  ```typescript
  class Pessoa {
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
## Criando um objeto a partir de uma classe
- No exemplo acima, temos a definição de uma classe Pessoa com as propriedades nome e idade e o método apresentar.
- Exemplo de criação de uma variável do tipo Pessoa:
  ```typescript
  let pessoa: Pessoa;
  pessoa = new Pessoa("João", 20);
  pessoa.apresentar(); // Olá, meu nome é João e eu tenho 20 anos.
  ```
- No exemplo acima, temos a criação de uma variável do tipo Pessoa com o nome João e a idade 20.

## Herança
- Herança é um conceito de orientação a objetos que permite criar uma classe a partir de outra classe.
- Herdando seus métodos e propriedades.
- Para definir uma classe que herda de outra classe, utilizamos a palavra reservada extends.
- Exemplo de classe que herda de Pessoa:
  ```typescript
  class Aluno extends Pessoa {
        matricula: number;

        constructor(nome: string, idade: number, matricula: number) {
            super(nome, idade);
            this.matricula = matricula;
        }

        apresentar() {
            super.apresentar();
            console.log(`Minha matrícula é ${this.matricula}.`);
        }
    }
    ```
- No exemplo acima, temos a definição de uma classe Aluno que herda de Pessoa.
- A palavra reservada super é utilizada para chamar o construtor da classe pai.
- Em seguida a palavra reservada super é utilizada para chamar o método apresentar da classe pai.

## Modificadores de acesso
- Em TypeScript, podemos definir modificadores de acesso para as propriedades e métodos de uma classe.

- Os modificadores de acesso são palavras-chave que determinam se uma propriedade ou método pode ser acessado de dentro ou de fora da classe.

### Modificadores disponíveis
- public: A propriedade ou método é acessível de dentro e de fora da classe (padrão).
- private: A propriedade ou método é acessível somente de dentro da classe.
- protected: A propriedade ou método é acessível de dentro da classe e de suas classes filhas.

Para definir o modificador de acesso de uma propriedade ou método, utilizamos as seguintes palavras-chave:

- public propriedade: define uma propriedade pública.
- private propriedade: define uma propriedade privada.
- protected propriedade: define uma propriedade protegida.
- public método(): define um método público.
- private método(): define um método privado.
- protected método(): define um método protegido.

Um exemplo de classe com propriedades e métodos com modificadores de acesso:
```typescript
class ContaBancaria {
  private saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  depositar(valor: number) {
    this.saldo += valor;
  }

  sacar(valor: number) {
    if (valor <= this.saldo) {
      this.saldo -= valor;
      console.log(`Saque realizado com sucesso. Novo saldo: ${this.saldo}.`);
    } else {
      console.log("Saldo insuficiente.");
    }
  }

  verSaldo() {
    console.log(`Saldo atual: ${this.saldo}.`);
  }
}
```

Exemplo de utilização da classe ContaBancaria:
```typescript
    let conta1 = new ContaBancaria(100);
    conta1.depositar(50); // Novo saldo: 150.
    conta1.verSaldo(); // Saldo atual: 150.
    conta1.sacar(80); // Saque realizado com sucesso. Novo saldo: 70.
    conta1.verSaldo(); // Saldo atual: 70.
```
