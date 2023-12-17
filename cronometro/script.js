/* ----- BOTÕES ----- */

function mudaCorStart(){
    var botao = document.getElementById("botao_start");
    botao.style["background-color"] = "green";
    botao.style["color"] = "white";
}
function retornaCorStart(){
    var botao = document.getElementById("botao_start");
    botao.style["background-color"] = "white";
    botao.style["color"] = "black";
}

function mudaCorPause(){
    var botao = document.getElementById("botao_pause");
    botao.style["background-color"] = "yellow";
    botao.style["color"] = "black";
}
function retornaCorPause(){
    var botao = document.getElementById("botao_pause");
    botao.style["background-color"] = "white";
    botao.style["color"] = "black";
}

function mudaCorReset(){
    var botao = document.getElementById("botao_reset");
    botao.style["background-color"] = "red";
    botao.style["color"] = "white";
}

function retornaCorReset(){
    var botao = document.getElementById("botao_reset");
    botao.style["background-color"] = "white";
    botao.style["color"] = "black";
}

/* ----- VARIÁVEIS GLOBAIS ----- */

let horas = 0;
let minutos = 0;
let segundos = 0;
let milissegundos = 0;
let intervalo = 0;

/* ----- START ----- */

function start(){

    pause();
    intervalo = setInterval(timer , 10);
    
}

/* ----- PAUSE ----- */

function pause(){

    clearInterval(intervalo);
    intervalo = null;

}

/* ----- RESET ----- */

function reset(){

    milissegundos = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    document.getElementById("milissegundos").innerText = '000';
    document.getElementById("segundos").innerText = '00';
    document.getElementById("minutos").innerText = '00';
    document.getElementById("horas").innerText = '00';

    clearInterval(intervalo);
    intervalo = null;

}

/* ----- TIMER ----- */

function timer(){

    milissegundos +=10;

    if (milissegundos == 1000){
        milissegundos = 0;
        segundos ++;
    }
    if (segundos == 60){
        segundos = 0;
        minutos ++;
    }
    if (minutos == 60){
        minutos = 0;
        horas ++;
    }

    document.getElementById("milissegundos").innerText = milissegundos.toString().padStart(3 , '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2 , '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2 , '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2 , '0');

}



