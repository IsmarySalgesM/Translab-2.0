// AQUI VA EL DOM
let inNumCard = document.getElementById("textNum");
btnNum.addEventListener("click", () => {
  inNumCard.value;
  
  //inNumCard = " ";
  let infoTarjeta = {
    cardBip: inNumCard.value
  };
  saveContactTarj(infoTarjeta);
 let createTarjNum = document.getElementById("createTarj");
  let cardNum = document.createElement("h1");
  createTarjNum.appendChild(cardNum);
  cardNum.innerHTML = inNumCard;
  console.log(inNumCard);
});
