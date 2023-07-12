let palpite = "a"
let palavra = "abelha"
let acertos= 0

for(let i = 0 ; i < palavra.length ; i++){
    if (palpite === palavra[i]){
        acertos +=1 
    }
}
console.log(acertos)