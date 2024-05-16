const readline = require('readline');    // importando a biblioteca

const input = readline.createInterface(   // criando uma instância
    process.stdin,                        // entrada de dados
    process.stdout                        // saida de dados
);

//média de 3 notas com dados digitados pelo usuario

let nota1 = 0;
let nota2 = 0;
let nota3 = 0;

input.question("Qual sua primeira nota? ", (nota1Digitada) => {
    nota1 = Number(nota1Digitada);
    input.question("Qual sua segunda nota? ", (nota2Digitada) => {
        nota2 = Number(nota2Digitada);
        input.question("Qual sua terceira nota? ", (nota3Digitada) => {
            nota3 = Number(nota3Digitada);

            const media = ((nota1 + nota2 + nota3) / 3).toFixed(2);
            
            console.log(`Sua média é: ${media}`);
            input.close();

            if (media >= 7) {
                console.log("Você foi Aprovado");
            } else {
                console.log("Você foi Reprovado");
            }
        });
    });
})