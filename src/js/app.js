// AQUI VA FUNCIONES

// modeles es puro datos // json api

// controlador  los procesan y lanza a las vistas botones cambio pantalla

// wiew

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    let emailUser = user.email;
    printUser.innerHTML = emailUser;
    //Si estamos logueados
    firstView.style.display = "none";
    secondView.style.display = "block";
    console.log("User > " + JSON.stringify(user));
  } else {
    //No estamos logueados
    firstView.style.display = "block";
    secondView.style.display = "none";
  }
});

// Hace loggin el usuario
function starIn() {
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  console.log(email);

  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("Usuario creado");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
      console.log(errorCode);
      console.log(errorMessage);
    });
}
// Se guarda la informacion de la tarjeta
function saveContactTarj(infoTarjeta) {
  firebase
    .database()
    .ref("tarjeta")
    .push(infoTarjeta) //
    .then(() => {
      alert("Se ha agregado su tarjeta bip con exito");
    })
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      //
    });
}
// Aqui se imprime en el select
firebase
  .database()
  .ref("/tarjeta")
  .limitToLast(5)
  .on("child_added", card => {
    selectVerSaldo.innerHTML += `
    <select>
    <option>${card.val().cardBip}</option>
    </select>`;
    inputDescont.innerHTML += `
    <select>
    <option>${card.val().cardBip}</option>
    </select>`;
  });

//Api Bip
btnTarifa.addEventListener("click", () => {
  let secondInputCard = document.getElementById("secondInput").value;
  let inSelect = document.getElementById("selectVerSaldo").value;
  fetch(
    `http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=${secondInputCard || inSelect }`
  )
    .then(response => response.json())
    .then(data => {
      console.log(data);
      renderInfo(data);
    })

    .catch(error => {
      console.error("tarjeta no existe");
      console.error("ERROR > " + error.stack);
    });
  const renderInfo = data => {
  containerSaldo.innerHTML = `<h1> Saldo Total</h1>` + data.saldoTarjeta;
};
  })


