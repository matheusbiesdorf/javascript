function verificar(){
    var data = new Date()
    var anoAtual = data.getFullYear()
    var anoInput = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(anoInput.value.length == 0 || anoInput.value >= anoAtual || anoInput.value < 1900){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName("radsex")
        var idade = anoAtual - Number(anoInput.value)
        var gênero = ''
        var img = document.createElement('img') /* Cria um <img> */
        img.setAttribute('id','foto') /* atribui id="foto" ao <img> */

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 1 && idade <= 10){
                //Criança
                img.setAttribute('src','bebe-m.png')
            }else if(idade >= 11 && idade <= 20){
                //Jovem
                img.setAttribute('src','jovem-m.png')
            }else if(idade >= 21 && idade <= 50){
                //adulto
                img.setAttribute('src','adulto-m.png')
            }else{
                //idoso
                img.setAttribute('src','idoso-m.png')
            }
        }else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 1 && idade <= 10){
                //Criança
                img.setAttribute('src','bebe-f.png')
            }else if(idade >= 11 && idade <= 20){
                //Jovem
                img.setAttribute('src','jovem-f.png')
            }else if(idade >= 21 && idade <= 50){
                //adulto
                img.setAttribute('src','adulto-f.png')
            }else{
                //idoso
                img.setAttribute('src','idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é um(a) ${gênero} e tem ${idade} ano(s)`
        res.appendChild(img)
    }
}