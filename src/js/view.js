window.onload = () => {
let btnFour = document.getElementById("btnPerfil");
let btnAnswer = document.getElementById("btnPregunta");

btnFour.addEventListener("click", () => {
  secondView.style.display = "none";
  threeView.style.display = "block";
});

btnAnswer.addEventListener("click", () => {
  secondView.style.display = "none";
  fourView.style.display = "block";
});

}