const valores =[100, 100, 100, 50] 

   
    let soma = 0;
    let menor = valores[0]

    for (let item of valores) {
        soma += item;
        
        if (item < menor){
            menor = item;
        }
    }

    if (valores.length >= 5) {
        console.log(soma - menor);

    } else {
        console.log(soma)
    }





