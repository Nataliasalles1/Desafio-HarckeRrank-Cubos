
function solucao(stringCorrompida) {

    let purificada = ''

    for (let i = 0; i < stringCorrompida.length; i++) {
        if (stringCorrompida[i] === '!' || stringCorrompida[i] == '@' || stringCorrompida[i] == '#'
            || stringCorrompida[i] == '$' || stringCorrompida[i] == '%' || stringCorrompida[i] == '&'
            || stringCorrompida[i] == '*' || stringCorrompida[i] == '(' || stringCorrompida[i] == ')') {

        } else {
            purificada = purificada + stringCorrompida[i]
        }
    }
    console.log(purificada)
}

solucao("*canis %lupus )familiaris")
