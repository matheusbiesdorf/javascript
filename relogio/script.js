function time(){

    const horario = new Date();

    let horas = horario.getHours();
    let minutos = horario.getMinutes();
    let segundos = horario.getSeconds();

    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

}

const timer = setInterval(time)