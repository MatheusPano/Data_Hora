function dataAtualFormatada() {
  let data = new Date(),
    dia = data.getDate().toString().padStart(2, "0"),
    mes = (data.getMonth() + 1).toString().padStart(2, "0"),
    ano = data.getFullYear();
  hora = data.getHours();
  min = data.getMinutes();
  document.getElementById(
    "data"
  ).innerHTML = `A data atual é: ${dia}/${mes}/${ano}`;
  document.getElementById("hora").innerHTML = `A hora atual é: ${hora}:${min}`;
}
