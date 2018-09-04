// AQUI VA EL DOM
let inNumCard = document.getElementById("textNum");
let inSelect = document.getElementById("selectVerSaldo");
let btnTarifa = document.getElementById("saldoCalcular");
let containerSaldo = document.getElementById("containerBip");
let restSaldo = document.getElementById("inputDescont");

btnNum.addEventListener("click", () => {
  let infoTarjeta = {
    cardBip: inNumCard.value
  };

  saveContactTarj(infoTarjeta);
  inNumCard.value = "";
  let createTarjNum = document.getElementById("createTarj");
  let cardNum = document.createElement("div");
  createTarjNum.appendChild(cardNum);
  cardNum.innerHTML = `
  <div class="card >
  <div class="card-header">
   ${Object.values(infoTarjeta)}
  </div>`;
});
