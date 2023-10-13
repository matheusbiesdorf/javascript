let num = [5,9,7,8,2]

console.log(`\nNosso vetor é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Primeiro valor: ${num[0]}\n`)

num.push(1)
num.sort()

console.log(`Nosso vetor alterado é o ${num}`)
console.log(`O vetor tem ${num.length} posições`)
console.log(`Primeiro valor: ${num[0]}\n`)

for(let pos=0 ; pos<num.length ; pos++){
    console.log(`Elemento ${pos} = ${num[pos]}`)
}

console.log(`-----------------------`)

for(let pos in num){
    console.log(`Elemento ${pos} = ${num[pos]}`)
}

console.log(`-----------------------`)

existe = num.indexOf(8)
if(existe != -1){
    console.log(`O número existe e está na posição ${existe}\n`)
}else{
    console.log(`O número não está presente no vetor\n`)
}


