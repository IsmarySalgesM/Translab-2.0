// AQUI VA FUNCIONES

// modeles es puro datos // json api

// controlador  los procesan y lanza a las vistas botones cambio pantalla

// wiew
function starIn() {
  let email = document.getElementById("inputEmail").value;
  let password = document.getElementById("inputPassword").value;
  console.log(email);

  firebase.auth().createUserWithEmailAndPassword(email, password)
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


//  validateEmail.addEventListener('click', () => {
//    let email = document.getElementById("inputEmail").value;
//  let password = document.getElementById("inputPassword").value;
//    firebase.auth().signInWithEmailAndPassword(email, password)
//    .then(() => {
//       console.log("Usuario con login exitoso");
//   })
//    .catch(error => {
//      console.log("Error de firebase > " + error.code);
//      console.log("Error de firebase, mensaje > " + error.message);
//    });
//  })
