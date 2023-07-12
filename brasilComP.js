let palavras = ["aveia", "manha", "ave"]
let primeiraLetra = 'a'
let segundaLetra = 'v'

const palavrasEncontradas = palavras.filter(palavra => palavra.startsWith(primeiraLetra + segundaLetra));

if(palavrasEncontradas.length === 0){
    console.log("NENHUMA");
} else {
  console.log(palavrasEncontradas.join('\n'));
}
