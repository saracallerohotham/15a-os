const fechaEvento = new Date("December 20, 2025 17:00:00").getTime();

const diasEl = document.getElementById("dias");
const horasEl = document.getElementById("horas");
const minutosEl = document.getElementById("minutos");
const segundosEl = document.getElementById("segundos");

const intervalo = setInterval(() => {
  const ahora = new Date().getTime();
  const diferencia = fechaEvento - ahora;

  if (diferencia < 0) {
    clearInterval(intervalo);
    document.getElementById("cuenta-regresiva").innerHTML =
      "¡Hoy es el gran día!";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor(
    (diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
  const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

  diasEl.innerText = dias.toString().padStart(2, "0");
  horasEl.innerText = horas.toString().padStart(2, "0");
  minutosEl.innerText = minutos.toString().padStart(2, "0");
  segundosEl.innerText = segundos.toString().padStart(2, "0");
}, 1000);
