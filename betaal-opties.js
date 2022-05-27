// WELCOME TO HELLISH PIT OF STATE CODING

document.getElementById("buttonPressedTop").addEventListener("click", pingping);
document.getElementById("buttonPressedBot").addEventListener("click", bank);

function pingping() {
  let answer = 0;
  console.log("pingping is ingedrukt");
  document.getElementById("VERANDER").style.backgroundColor = "#49A931";
  URLChange(answer);
}

function bank() {
  let answer = 1;
  console.log("Bankkaart is ingedrukt");
  document.getElementById("VERANDER").style.backgroundColor = "#49A931";
  URLChange(answer);
}

function URLChange(answer) {
  if (answer == 0) {
    let groeneButton = (document.querySelector(".gaVerderLink").href =
      "betaling.html");

    console.log("URL CHANGE NAAR PINGPING");
  } else if (answer == 1) {
    let groeneButton = (document.querySelector(".gaVerderLink").href =
      "betaling-qrecode.html");
    console.log("URL CHANGE NAAR BANKKAART");
  }
}

