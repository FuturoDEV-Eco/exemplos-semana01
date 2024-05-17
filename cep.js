const readline = require('readline')
const fs = require('fs')

const input = readline.createInterface(
    process.stdin,
    process.stdout
);

input.question("Qual é o cep da pesquisa ?", (cepDigitado) => {

    if (cepDigitado.length === 8) {

        // fetch("https://viacep.com.br/ws/"+cepDigitado+"/json/")

        fetch(`https://viacep.com.br/ws/${cepDigitado}/json/`)
            .then(response => {
                if (response.ok === true) {
                    return response.json()
                } else {
                    throw new Error()
                }
            })
            .then(data => {
                if (data.erro === true) {
                    throw new Error()
                }
                
                fs.writeFileSync('endereco.txt', 
                `
                Bairro: ${data.bairro} 
                Rua: ${data.logradouro}
                UF: ${data.uf} 
                Cidade: ${data.localidade} 
                `
            )
                console.log(data);
            })
            .catch(() => {
                console.log("Erro ao pesquisar no via cep")
            })


        /*
       Exemplo usando somente um then
       .then(async (response) => {
           const data = await response.json()
           console.log(data)
       })
       */

    }

})

