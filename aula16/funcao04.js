function fat(n){
    fat = 1
    for(let i=n ; i>1 ; i--){
        fat *= i
    }
    return fat
}

console.log(`O fatorial é ${fat(5)}`)

function fat_recursivo(n){
    if(n==1){
        return 1
    }else{
        return n * fat_recursivo(n-1)
    }
}

console.log(`O fatorial é ${fat_recursivo(5)}`)