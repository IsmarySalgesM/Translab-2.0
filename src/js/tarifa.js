let selectOptionsCard = document.getElementById("tarifaHorario");
selectOptionsCard.addEventListener("change", function() {
  let selectedZonaIf = selectOptionsCard[selectOptionsCard.selectedIndex].value;
  valorTarifa.innerHTML = ` <div class="card">
  <div class="card-header">
  <h3> Valor Tarifa :  ${selectedZonaIf}</h3>
  </div>
`;
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
  const bipCard = dataTarifa.saldoTarjeta.match(regex);
  const finalBip = parseInt(bipCard[0] + bipCard[1]);
  const selected = document.getElementById("tarifaHorario").value;
  const bipTotal = finalBip - selected
  priceBip.innerHTML = ` <div class="card">
  <div class="card-header">
  <h3> Saldo Total:   ${bipTotal}</h3>
  </div>`

}
