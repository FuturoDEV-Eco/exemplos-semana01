const readline = require('readline')

const input = readline.createInterface(
    process.stdin, 
    process.stdout
);

let peso = 0;
let altura = 0;

input.question("Qual o peso ?", (pesoDigitado) => {
    
    peso = Number(pesoDigitado);
    
    input.question("Qual é a altura ?", (alturaDigitada) => {
        altura = Number(alturaDigitada);

        const resultado = (peso / (altura * altura)).toFixed(2)
        console.log(resultado)
    
        if(resultado < 18.5) {
            console.log(resultado + " ( Abaixo do peso ideal )")
        } else if(resultado >= 18.6 && resultado <= 24.9 ) {
            console.log(resultado + " ( peso ideal )")
        }
        else if(resultado >= 25.0 && resultado <= 29.9 ) {
            console.log(resultado + " ( levemente acima do peso )")
        }

        // finalizar as condições
        input.close()
    })

} )