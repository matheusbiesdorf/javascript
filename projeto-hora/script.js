function carregar(){
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    msg.innerHTML = `Agora são ${hora}:${minuto}`
    if(hora >=6 && hora <12){
        img.src = 'foto-manha.png'
        document.body.style.background = '#BF9C88'
    }else if(hora >= 12 && hora <18){
        img.src = 'foto-tarde.png'
        document.body.style.background = '#F28749'
    }else{
        img.src = 'foto-noite.png'
        document.body.style.background = '#092326'
    }
}