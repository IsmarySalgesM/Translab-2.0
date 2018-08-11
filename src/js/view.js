window.onload = () => {
  let btnFour = document.getElementById("btnPerfil");
  //let btn2 = document.getElementById('btnCalcular');
  //let boxTwo = document.getElementById('caja-2');
  //let boxOne = document.getElementById('caja-1');
  //let boxthree = document.getElementById('caja-3');
  //let inputcard = document.getElementById('tarjenum');
  //let inputchoose = document.getElementById('inputSelect');

  btnFour.addEventListener("click", () => {
    secondView.style.display = "none";
    threeView.style.display = "block";
  });
};
