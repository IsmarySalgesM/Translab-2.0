// AQUI VA EL DOM

btnNum.addEventListener("click", () => {
  let inNumCard = document.getElementById("textNum").value;
  //inNumCard = " ";
  let createTarjNum = document.getElementById("createTarj");
  let cardNum = document.createElement("h1");
  createTarjNum.appendChild(cardNum);
  cardNum.innerHTML = inNumCard;
});
