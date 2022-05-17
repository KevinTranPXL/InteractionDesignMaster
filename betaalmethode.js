// WELCOME TO HELLISH PIT OF STATE CODING

document.getElementById("buttonPressedTop").addEventListener("click", pingping);
document.getElementById("buttonPressedBot").addEventListener("click", bank);

function pingping() {
  let answer = 0;
  console.log("pingping is ingedrukt");
  URLChange(answer);
  //   return answer;
}

function bank() {
  let answer = 1;
  console.log("Bankkaart is ingedrukt");
  URLChange(answer);
  //   return answer;
}

function URLChange(answer) {
  if (answer == 0) {
    let groeneButton = document.querySelector(".gaVerderLink").href = "https://www.epicgames.com/fortnite/en-US/home";

    // groeneButton = "https://www.epicgames.com/fortnite/en-US/home";
    // let textNode = document.createTextNode(
    //   "https://www.epicgames.com/fortnite/en-US/home"
    // );
    // groeneButton.appendChild(textNode);
    console.log("URL CHANGE NAAR PINGPING");
  } else if (answer == 1) {
    document.querySelector("gaVerderLink");
    console.log("URL CHANGE NAAR BANKKAART");
  }
}
