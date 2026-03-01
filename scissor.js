const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const replay = document.getElementById("replay");
const output = document.getElementById("output");

function giffy() {
  const gif = document.createElement("img");
  gif.src = "rock-paper.gif";
  gif.style.height = "150px";
  gif.style.width = "200px";
  gif.style.borderRadius = "30px";
  output.appendChild(gif);
}
function clapping() {
  const clap = document.createElement("img");
  clap.src = "clapping.gif";
  clap.style.height = "130px";
  clap.style.width = "150px";
  clap.style.borderRadius = " 30px";
  output.appendChild(clap);
}
function shakehand() {
  const shake = document.createElement("img");
  shake.src = "draw.gif";
  shake.style.height = "130px";
  shake.style.width = "150px";
  shake.style.borderRadius = "30px";
  output.appendChild(shake);
}

function laugh() {
  const roast = document.createElement("img");
  roast.src = "laughgif.gif";
  roast.style.height = "150px";
  roast.style.width = "150px";
  roast.style.borderRadius = "30px";
  output.appendChild(roast);
}

function verify(player_pick, computer_pick) {
  giffy();
  if (
    (computer_pick === "rock" && player_pick === "paper") ||
    (computer_pick === "paper" && player_pick === "scissor") ||
    (computer_pick === "scissor" && player_pick === "rock")
  ) {
    //giffy();
    setTimeout(() => {
      output.innerHTML = "";
      const win = document.createElement("p");
      win.innerHTML = `🥳🎉 YOU WON 🎉🥳`;
      output.appendChild(win);
      clapping();
      partyPopper();
      partyPopper2();
      
    }, 3000);
  } else if (computer_pick === player_pick) {
    //giffy();
    setTimeout(() => {
      output.innerHTML = "";
      const draw = document.createElement("p");
      draw.innerHTML = "It's a draw 🤝";
      output.appendChild(draw);
      shakehand();
    }, 3000);
  } else {
    //giffy();
    setTimeout(() => {
      output.innerHTML = "";
      const lost = document.createElement("p");
      lost.innerHTML = "You lost idiot";
      output.append(lost);
      laugh();
    }, 4000);
  }
}
let computer_pick = "";

let array = ["rock", "paper", "scissor"];
computer_pick = array[Math.floor(Math.random() * array.length)];
console.log(`computer pick -- ${computer_pick}`);

let player_pick = "";
window.onload = () => {
  enabled();
  output.innerHTML = "";
  player_pick = "";
};
function enabled() {
  rock.disabled = false;
  paper.disabled = false;
  scissor.disabled = false;
}
function disable() {
  rock.disabled = true;
  paper.disabled = true;
  scissor.disabled = true;
}
rock.onclick = () => {
  disable();
  player_pick = "rock";
  console.log(`my pick -- ${player_pick}`);

  verify(player_pick, computer_pick);
};
paper.onclick = () => {
  disable();
  player_pick = "paper";
  console.log(`my pick -- ${player_pick}`);
  verify(player_pick, computer_pick);
};
scissor.onclick = () => {
  disable();
  player_pick = "scissor";
  console.log(`my pick -- ${player_pick}`);
  verify(player_pick, computer_pick);
};
replay.onclick = () => {
  location.reload();
};
function partyPopper() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { x: 1, y: 1 },
    gravity: 0.5,
    angle: 135,
    scalar: 1,
  });
}
function partyPopper2() {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { x: 0, y: 1 },
    gravity: 0.5,
    angle: 45,
    scalar: 1,
  });
}
