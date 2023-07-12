let perdedora = 0

for (let palavra of palavras ){
   let primeiraLetra = palavra[0]

   if(primeiraLetra !== letra) {
    perdedora ++
   }
}

console.log(perdedora)