// WELCOME TO HELLISH PIT OF STATE CODING

document.getElementById("buttonPressedTop").addEventListener("click", pingping);
document.getElementById("buttonPressedBot").addEventListener("click", bank);

function pingping() {
  let answer = 0;
  console.log("pingping is ingedrukt");

  document.getElementById("VERANDER").style.backgroundColor = "#49A931";

  // DOM MANIPULATIE FIXEN focused

  document.getElementById("buttonPressedTop").style.backgroundColor = "#EBF7E8";
  document.getElementById("buttonPressedTop").style.transition =
    "all ease-in 0.2s";

  document.getElementById("domPingPing").style.backgroundColor = "#1A8300";
  document.getElementById("domPingPing").style.transition = "all ease-in 0.2s";

  document.getElementById("cardIcon").style.filter = "brightness(0) invert(1)";
  document.getElementById("cardIcon").style.transition = "all ease-in 0.2s";

  document.getElementById("snelste-optie-dom").style.backgroundColor =
    "#FFFFFF";
  document.getElementById("snelste-optie-dom").style.transition =
    "all ease-in 0.2s";

  // ANDERE BUTTON UNFOCUSED ZETTEN
  document.getElementById("domBank").style.backgroundColor = "#FFFFFF";
  document.getElementById("domBank").style.transition = "all ease-in 0.2s";
  document.getElementById("buttonPressedBot").style.backgroundColor = "#FFFFFF";
  document.getElementById("buttonPressedBot").style.transition =
    "all ease-in 0.2s";
  document.getElementById("cardIconBot").style.filter = "brightness(1) invert(0)";
  document.getElementById("cardIconBot").style.transition = "all ease-in 0.2s";

  // URLVERANDEREN ONDERAAN
  URLChange(answer);
}

function bank() {
  let answer = 1;
  console.log("Bankkaart is ingedrukt");
  document.getElementById("VERANDER").style.backgroundColor = "#49A931";

  // DOM MANIPULATIE FIXEN focused
  document.getElementById("buttonPressedBot").style.backgroundColor = "#EBF7E8";
  document.getElementById("buttonPressedBot").style.transition =
    "all ease in 0.2s";

  document.getElementById("domBank").style.backgroundColor = "#1A8300";
  document.getElementById("domBank").style.transition = "all ease-in 0.2s";

  document.getElementById("cardIconBot").style.filter =
    "brightness(0) invert(1)";
  document.getElementById("cardIconBot").style.transition = "all ease-in 0.2s";

  // ANDERE BUTTON UNFOCUSED ZETTEN
  document.getElementById("domPingPing").style.backgroundColor = "#FFFFFF";
  document.getElementById("domPingPing").style.transition = "all ease-in 0.2s";
  document.getElementById("buttonPressedTop").style.backgroundColor = "#FFFFFF";
  document.getElementById("buttonPressedTop").style.transition =
    "all ease in 0.2s";
  document.getElementById("snelste-optie-dom").style.backgroundColor =
    "#BAF2AC";
  document.getElementById("snelste-optie-dom").style.transition =
    "#all ease-in 0.2s";
  document.getElementById("cardIcon").style.filter = "brightness(1) invert(0)";
  document.getElementById("cardIcon").style.transition = "all ease-in 0.2s";
  URLChange(answer);
}

function URLChange(answer) {
  if (answer == 0) {
    let groeneButton = (document.querySelector(".gaVerderLink").href =
      "betaling.html");

    console.log("URL CHANGE NAAR PINGPING");
  } else if (answer == 1) {
    let groeneButton = (document.querySelector(".gaVerderLink").href =
      "betaling-qrcode.html");
    console.log("URL CHANGE NAAR BANKKAART");
  }
}
