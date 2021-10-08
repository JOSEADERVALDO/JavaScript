let num =[10,16,22,55]

num.sort()
num.push(1)
console.log(num)
console.log(`O valor tem ${num.length} posiçoês`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
let pos = num.indexOf(55)
if (pos ==  -1){
    console.log('O valor não foi encontrado!')
} else{
    console.log(`O valor  está na posição ${pos}`)
}

