let notas = [100, 100, 100, 20, 50, 30, 14 ,100, 100, 100]
let cont = 0
let soma = 0 
let menor = notas[0]
let maior = notas[0]

for (let nota of notas) {
    soma += nota;
    cont += 1
    
    if (nota < menor){
        menor = nota;
    }

    if (nota > maior){
        maior = nota;
    }
}

let media = Math.abs(((menor + maior) - soma) / (cont - 2))

console.log(media)
