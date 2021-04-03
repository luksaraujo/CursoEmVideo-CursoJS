let num = [5, 8, 2, 9, 3] //Cria o array/vetor com os valores que estão inseridos dentro dos conchetes
num.push(1) //Adiciona o valor entre parenteses à última posição do vetor
console.log(num)
console.log(`O vetor tem ${num.length} elementos/posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
num.sort() //Ordena o vetor em ordem crescente
console.log(`Reordenado, o vetor fica assim: ${num}`)

let pos = num.indexOf(8)
console.log(`O valor 8 está na posição ${pos}`)

pos = num.indexOf(4)
if (pos == -1) console.log(`O valor 4 não foi encontrado`)
else console.log(`O valor está na posição ${pos}`)