function contar(){
    var inicio = parseInt(document.getElementById("inicio").value);
    var fim = parseInt(document.getElementById("fim").value);
    var passo = parseInt(document.getElementById("passo").value);
    var saida = document.getElementById("saida");
    saida.innerHTML = "";

    if(passo <= 0){
        passo = 1
    }
    if(inicio > fim){
        alert("O início não pode ser menor do que o fim")
    }
    
    for (var i = inicio; i <= fim; i += passo) {
        saida.innerHTML += i + " ";
    }
    saida.innerHTML += "FIM";
}

