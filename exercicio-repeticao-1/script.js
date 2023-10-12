function contar(){

    var inicio = document.getElementById("inicio");
    var fim = document.getElementById("fim");
    var passo = document.getElementById("passo");
    var saida = document.getElementById("saida");

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        saida.innerHTML = "Impossível contar"
        window.alert("Não deixe dados em branco!")
    }else{
        saida.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if(p <= 0){
            window.alert("Passo inválido. Considerando passo = 1")
            p = 1
        }

        if(i<f){
            for(let c=i ; c<=f ; c+=p){
                saida.innerHTML += `${c} \u{1F449}`
            }
        }else{
            for(let c=i ; c>=f ; c-=p){
                saida.innerHTML += `${c} \u{1F449}`
            }
        }
        saida.innerHTML += `\u{1F3C1}`
    }
}