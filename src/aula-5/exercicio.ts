// Q1
// Exemplo que utiliza object, array e enum:

enum ETipoDePost {
    NORMAL = "normal",
    EVENTO = "evento"
}

type post = {
    autor: string,
    texto: string,
    tipo: ETipoDePost
}

const posts: post[] = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver",
        tipo: ETipoDePost.NORMAL
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!",
        tipo: ETipoDePost.NORMAL
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!",
        tipo: ETipoDePost.EVENTO
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!",
        tipo: ETipoDePost.NORMAL
    },
]

function buscarPostsPorAutor(posts: post[], autorInformado: string) {
    return posts.filter(
        (post) => {
            return post.autor === autorInformado
        }
    )
}

// Q2 
// Criar um objeto que represente uma conta bancária, com as propriedades de número da conta, saldo e extrato.

type conta = {
    numeroDaConta: number,
    saldo: number,
    extrato: extrato[]
}

type extrato = {
    valor: number,
    data: string,
    descricao: string
}

const conta1: conta = {
    numeroDaConta: 123456,
    saldo: 1000,
    extrato: [
        {
            valor: 200,
            data: "10/10/2020",
            descricao: "Depósito de dinheiro"
        },
        {
            valor: 100,
            data: "11/10/2020",
            descricao: "Depósito de dinheiro"
        },
        {
            valor: 300,
            data: "12/10/2020",
            descricao: "Depósito de dinheiro"
        }
    ]
}
