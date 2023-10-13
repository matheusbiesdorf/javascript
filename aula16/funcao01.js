function parimpar(n){
    if(n%2 == 0){ /* RESTO DA DIVISÃO */
        return 'Par'
    }else{
        return 'Ímpar'
    }
}

console.log(`O número 4 é ${parimpar(4)}`)
console.log(`O número 3 é ${parimpar(3)}`)