window.onload = () => {
  let btnFour = document.getElementById("btnPerfil");
  let btnAnswer = document.getElementById("btnPregunta");
  let btnSaldo = document.getElementById("btnSaldo");
  let iSaldo = document.getElementById("iconSaldo");

  btnFour.addEventListener("click", () => {
    secondView.style.display = "none";
    threeView.style.display = "block";
  });

  btnAnswer.addEventListener("click", () => {
    secondView.style.display = "none";
    fourView.style.display = "block";
  });

 
  btnSaldo.addEventListener("click", () => {
    secondView.style.display = "none";
    fiveView.style.display = "block";
  });


 function iconSaldo() {
    threeView.style.display = "none";
    fiveView.style.display = "block";
  }; 
  
  
};
