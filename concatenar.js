const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let nome = ""

input.question("Qual é o seu nome ?", (nomeDigitado) => {
    nome = nomeDigitado

    let sobrenome = ""
    input.question("Qual é o seu sobrenome ?", (sobrenomeDigitado) => {
        sobrenome = sobrenomeDigitado
        input.close()
        console.log(nome + " " + sobrenome)
    })

})

