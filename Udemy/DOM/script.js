let rand = Math.trunc(Math.random() * 21);
console.log(rand);
let inp = document.querySelector("#guessNumber");
let message = document.querySelector("#message");
let life = document.querySelector("#life");
let score = document.querySelector("#score");
document.querySelector("#checkNumber").addEventListener("click", game);
document.querySelector("#retry").addEventListener("click", retryFun);

function game() {
  if (rand == Number(inp.value)) {
    message.textContent = "You won the Game";
    score.textContent = life.textContent;
  } else {
    rand > Number(inp.value)
      ? (message.textContent = "The Number Too low")
      : (message.textContent = "The Number is To Heigh");
    let ll = life.textContent;
    if (ll > 0) {
      ll--;
    } else {
      message.textContent = "You Lost The Game !";
    }
    life.textContent = ll;
  }
}

function retryFun() {}
