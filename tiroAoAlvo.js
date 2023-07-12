const disparos = [0,50, 90, 80, 100, 80, 40]
let qtdDisparo = 0

for(let i=0 ; i < disparos.length ; i++){
    if(disparos[i] >= 70){
        qtdDisparo +=1
    }
    else{
        qtdDisparo +=0
    }
}
    if (qtdDisparo >= 3){
        console.log(qtdDisparo)

    }else{
        console.log("ELIMINADO")
    }