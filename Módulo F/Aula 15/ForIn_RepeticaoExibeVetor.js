let valores = [8, 1, 7, 4, 2, 9]
console.log(valores)

/*
    for (let pos = 0; pos < valores.length; pos++) {
        console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
    }
    console.log(`No total, o vetor tem ${valores.length} posições.`)
*/


for(let pos in valores){ //Repetição Específica para vetores e objetos em JS
    console.log(`A posição ${pos} tem o valor ${valores[pos]}.`)
}
console.log(`No total, o vetor tem ${valores.length} posições.`)