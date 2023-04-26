// Q1
// Crie uma classe que represente uma pessoa, com os atributos de nome, idade, email e endereco. Crie um método que imprima todas as informações de uma instância dessa classe.

class Pessoa {

    constructor(
        public nome: string,
        public idade: number,
        public email: string,
        public endereco: string
    ) { }

    public imprimeInformacoes(): void {
        console.log(`
            Nome: ${this.nome}
            Idade: ${this.idade}
            Email: ${this.email}
            Endereço: ${this.endereco}
        `)
    }
}

// Q2
// Crie a classe Aluno que herda da classe Pessoa e que possua os atributos de matricula e turma.

class Aluno extends Pessoa {

    constructor(
        nome: string,
        idade: number,
        email: string,
        endereco: string,
        public matricula: number,
        public turma: string
    ) {
        super(nome, idade, email, endereco);
    }
}

// Q3
// Crie a classe Professor que herda da classe Pessoa e que possua os atributos de salario e especialidade.
// Crie um método que aumenta o salario do professor em 5% usando interface

interface AumentoSalario {
    aumentoSalario(): void;
}

class Professor extends Pessoa implements AumentoSalario {

    constructor(
        nome: string,
        idade: number,
        email: string,
        endereco: string,
        public salario: number,
        public especialidade: string
    ) {
        super(nome, idade, email, endereco);
    }

    public aumentoSalario(): void {
        this.salario += this.salario * 0.05;
    }
}


