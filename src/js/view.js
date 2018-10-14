function showBalance() {
  document.getElementById("firstView").style.display = "none";
  document.getElementById("secondView").style.display = "none";
  document.getElementById("threeView").style.display = "none";
  document.getElementById("fourView").style.display = "none";
  document.getElementById("fiveView").style.display = "none";
  document.getElementById("sixView").style.display = "block";
  document.getElementById('menuNav').style.display = 'block';
  closeMenu();
}

function showPrice() {
  document.getElementById("firstView").style.display = "none";
  document.getElementById("secondView").style.display = "none";
  document.getElementById("threeView").style.display = "none";
  document.getElementById("fourView").style.display = "none";
  document.getElementById("sixView").style.display = "none";
  document.getElementById("fiveView").style.display = "block";
  document.getElementById('menuNav').style.display = 'block';

  closeMenu();
}

function showProfile() {
  document.getElementById("firstView").style.display = "none";
  document.getElementById("secondView").style.display = "none";
  document.getElementById("fourView").style.display = "none";
  document.getElementById("fiveView").style.display = "none";
  document.getElementById("sixView").style.display = "none";
  document.getElementById("threeView").style.display = "block";
  document.getElementById('menuNav').style.display = 'block';
  closeMenu();
}

function showQuestions() {
  document.getElementById("firstView").style.display = "none";
  document.getElementById("secondView").style.display = "none";
  document.getElementById("threeView").style.display = "none";
  document.getElementById("fiveView").style.display = "none";
  document.getElementById("sixView").style.display = "none";
  document.getElementById("fourView").style.display = "block";
  document.getElementById('menuNav').style.display = 'block';
  closeMenu();
}

function showHome() {
  document.getElementById("firstView").style.display = "none";
  document.getElementById("threeView").style.display = "none";
  document.getElementById("fourView").style.display = "none";
  document.getElementById("fiveView").style.display = "none";
  document.getElementById("sixView").style.display = "none";
  document.getElementById("secondView").style.display = "block";
  document.getElementById('menuNav').style.display = 'block';
  closeMenu();
}
