/* PEGAR DATA E HORA ATUAIS */
var ano_atual, mes_atual, dia_atual, hora_atual, minuto_atual, segundo_atual;
function hoje() {
    var data_atual = new Date();
    data_atual.setMilliseconds(0);

    ano_atual = data_atual.getFullYear();
    mes_atual = data_atual.getMonth() + 1;
    dia_atual = data_atual.getDate();
    hora_atual = data_atual.getHours();
    minuto_atual = data_atual.getMinutes();
    segundo_atual = data_atual.getSeconds();
}

/* PEGAR DATA E HORA DO EVENTO */

var ano_evento, mes_evento, dia_evento, hora_evento, minuto_evento
function evento() {
    var data_evento = new Date(document.getElementById("data").value);
    var horario_evento = document.getElementById("horario").value.split(':');

    ano_evento = data_evento.getFullYear();
    mes_evento = data_evento.getMonth() + 1;
    dia_evento = data_evento.getDate() + 1;
    hora_evento = parseInt(horario_evento[0]);  
    minuto_evento = parseInt(horario_evento[1]);
}


/* CALCULAR O TEMPO QUE FALTA NA CONTAGEM */

var total_segundos_evento, total_segundos_atual, total_segundos_contagem, intervalo
function start(){
    hoje()
    evento()
    
    total_segundos_atual = ano_atual*31536000 + mes_atual*2592000 + dia_atual*86400 + hora_atual*3600 + minuto_atual*60 + segundo_atual

    total_segundos_evento = ano_evento*31536000 + mes_evento*2592000 + dia_evento*86400 + hora_evento*3600 + minuto_evento*60

    total_segundos_contagem = total_segundos_evento - total_segundos_atual

    if(total_segundos_atual > total_segundos_evento){
       cancel()
       document.getElementById("display").style.display = 'block'
       document.getElementById("display").innerText = 'Data inválida' 
       document.getElementById("display").style.backgroundColor = 'darkorange'
    }else{
        intervalo = setInterval(update , 1000)
        document.getElementById("display").style.display = 'none'
    }
}

/* ATUALIZAR A CONTAGEM A CADA SEGUNDO*/

var dias , horas , minutos , segundos , resto
function update(){
    total_segundos_contagem -= 1
    
    dias = Math.floor(total_segundos_contagem / 86400)
    resto = Math.floor(total_segundos_contagem % 86400)
    
    horas = Math.floor(resto / 3600)
    resto = Math.floor(resto % 3600)

    minutos = Math.floor(resto / 60)
    resto = Math.floor(resto % 60)

    segundos = resto

    segundos = segundos.toString().padStart(2 , '0');   
    minutos = minutos.toString().padStart(2 , '0');
    horas = horas.toString().padStart(2 , '0');
    dias = dias.toString().padStart(3 , '0');
    
    document.getElementById("segundos").innerText = segundos
    document.getElementById("minutos").innerText = minutos
    document.getElementById("horas").innerText = horas
    document.getElementById("dias").innerText = dias

    if(total_segundos_contagem == 0){
        document.getElementById("display").style.display = 'block'
        document.getElementById("display").innerText = 'O evento começou!' 
        document.getElementById("display").style.backgroundColor = 'darkgreen'
        cancel()
    }
}

/* CANCELAR CONTAGEM */

function cancel(){

    if(total_segundos_contagem > 0){
        document.getElementById("display").style.display = 'block'
        document.getElementById("display").innerText = 'Contagem interrompida' 
        document.getElementById("display").style.backgroundColor = 'darkred'
    }
    

    clearInterval(intervalo)
    intervalo = null

    dias = 0
    horas = 0
    minutos = 0
    segundos = 0
    resto = 0

    document.getElementById('segundos').innerText = '00';
    document.getElementById('minutos').innerText = '00';
    document.getElementById('horas').innerText = '00';
    document.getElementById('dias').innerText = '000';

}


