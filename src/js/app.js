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

