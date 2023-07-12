let sequencia = ['>', '>', '>', '>', '>', '>', '>', '>', '>']
let cont = 0

for (let i = 0; i < sequencia.length; i++) {

    if (sequencia[i] == ">") {
        cont += 1

    } else {
        cont -= 1
    }
    if (cont > 6) {
        cont = 0
    }
    if (cont < 0) {
        cont = 6
    }

}

console.log(cont)