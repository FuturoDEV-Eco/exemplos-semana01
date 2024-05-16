/*
  var -> DEPRECIADO
  let -> sofre alteracao durante a execucao do programa
  const -> valor fixo durante a execucao do programa
*/

/* -------------------- STRING ----------------------------- */
const nome = "Douglas"
const comentario = " Java Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ...." 

// nome = nome.toUpperCase()

console.log(nome)
console.log(comentario.replace("Java", '-----')) 
/* ------------------------------------------------- */

/* ------------------- Number ------------------------------ */

const salario = "100"
const bonus = 50
console.log(Number(salario)-Number(bonus))


/* ------------------- Boolean ------------------------------ */

const maiorIdade = false
const idade = 25

if(idade < 18) {
    console.log("ENVIAR EMAIL")
}

/* ------------------- NULL ------------------------------ */

let cidade = null

// buscando as informações do cep

cidade = "Pacajus"

/* ------------------- UNDEFINED ------------------------------ */

let pessoa;

/* ------------------- OBJETO ------------------------------ */

const aluno = {
    nome: "Henrique Douglas",
    curso: "Programação",
    idade: 25,
} 

aluno.cidade = "Pacajus"
aluno.idade = 30

console.log(aluno)

const localidade = {
    "cep": "01001-000",
    "logradouro": "Praça da Sé",
    "complemento": "lado ímpar",
    "bairro": "Sé",
    "localidade": "São Paulo",
    "uf": "SP",
    "ibge": "3550308",
    "gia": "1004",
    "ddd": "11",
    "siafi": "7107"
  }

  /* ------------------- ARRAY ------------------------------ */

  const estadosBrasileiros = ["CE", "SC", "PR", "BA"] // array string
  const numerosSorteados = [18,19,9,3,4] // array string

  const alunos = [
    {
        nome: "Henrique Douglas",
        curso: "Programação",
        idade: 25,
    },
    {
        nome: "Douglas Henrique",
        curso: "Programação 2",
        idade: 18,
    } 
  ]

   /* ------------------- DATE ------------------------------ */

   const hoje = new Date()

   console.log(hoje.getFullYear())

   /* ------------------- REGEX ------------------------------ */

   const cpf = "999.999.999"
   const padraoCpf = /^(\d{3}\.\d{3}\.\d{3}\-\d{2})$/

   if(padraoCpf.test(cpf)) {
        console.log("È um CPF")
   } else {
      console.log("NAO é cpf")
   }
