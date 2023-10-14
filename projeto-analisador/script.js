/* Variáveis globais */

let i = 0
let vetor = []
let soma = 0
let saida = document.getElementById("saida")

/* Função p/ adicionar numero */

function adiciona(){

    let num = document.getElementById("numero") /* numero entrada */
    let n = Number(num.value)
    let existe = vetor.indexOf(n)

    if(num.value.length !=0 && num.value >= 1 && num.value <= 100 && existe == -1){
        let lista = document.getElementById("lista") /* id select */
        let item = document.createElement('option') /* criar option */
        
        item.text = `Valor ${n} adicionado.` /*  */
        lista.appendChild(item)
        vetor[i] = n
        soma += n
        i++
        saida.innerHTML = ""
        num.value = ""
    }else if(num.value.length == 0){
        window.alert("Por favor, insira um número!")
    }else if(num.value<1 || num.value>100 ){
        window.alert("O número deve estar entre 0 e 100.")
    }else if(existe != -1){
        window.alert("Este número já está na lista")
    }
}

/* Função p/ finalizar e mostrar saída */

function finaliza(){

    vetor.sort(function (a, b) {
        return a - b;
    });
    
    if(vetor.length >= 1){
        saida.innerHTML = ""
        saida.innerHTML += `Números cadastrados: ${vetor.length} <br>` 
        saida.innerHTML += `Menor valor informado: ${vetor[0]} <br>`
        saida.innerHTML += `Maior valor informado: ${vetor[vetor.length-1]} <br>`
        saida.innerHTML += `Soma total: ${soma} <br>`
        saida.innerHTML += `Média: ${soma/vetor.length} <br>`
    }else{
        window.alert("Dados insuficientes!")
    }
    
}