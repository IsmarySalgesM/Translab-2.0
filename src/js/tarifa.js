let selectOptionsCard = document.getElementById("tarifaHorario");
selectOptionsCard.addEventListener("change", function() {
  let selectedZonaIf = selectOptionsCard[selectOptionsCard.selectedIndex].value;
  price.innerHTML = selectedZonaIf;
});

calConTarifa.addEventListener("click", () => {
  let bipCardTarifa = cardBipNum.value;
  let bipCardTarjeta = inputDescont.value;

  fetch(
    `https://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${bipCardTarifa ||
      bipCardTarjeta}`
  )
    .then(response => response.json())
    .then(dataTarifa => {
      console.log(dataTarifa);
      renderCard(dataTarifa);
    });
});

function renderCard(dataTarifa) {
  const regex = /(\d+)/g;
  const bipBalance = dataTarifa.saldoTarjeta.match(regex);
  const finalBipBalance = parseInt(bipBalance[0] + bipBalance[1]);
  const selectedPrice  = document.getElementById("tarifaHorario").value
  const finalTotal = finalBipBalance - selectedPrice;
  console.log(finalTotal);
}
