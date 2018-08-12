// AQUI VA EL DOM
let inNumCard = document.getElementById("textNum");
btnNum.addEventListener("click", () => {
  inNumCard.value;
 // if (typeof inNumCard == "string") {
  //  alert("Por favor, introducir solo numeros");
  //} else {
  //  return;
 // }

  let infoTarjeta = {
    cardBip: inNumCard.value
  };

  saveContactTarj(infoTarjeta);
  inNumCard.value = "";
  let createTarjNum = document.getElementById("createTarj");
  let cardNum = document.createElement("h1");
  createTarjNum.appendChild(cardNum);
  cardNum.innerHTML = Object.values(infoTarjeta);
});
