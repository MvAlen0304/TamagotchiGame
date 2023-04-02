const catImage = document.getElementById("cat-image");
const catNameBubble = document.querySelector(".cat-name-bubble");
const catNameInput = document.getElementById("cat-name");
const TailAnimation = document.querySelector(".animation-tail")

let catName = "Give name";
catNameInput.addEventListener("input", () => {
  catName = catNameInput.value;
  updateCatName();
});

function updateCatName() {
  catNameBubble.textContent = catName;
}

function animation() {
  TailAnimation.classList.remove("animation-tail")
  TailAnimation.classList.add("animation-do")
}

TailAnimation.addEventListener("click", animation)

function animationDone() { 
  TailAnimation.classList.remove("animation-do") 
  TailAnimation.classList.add("animation-tail")
}

TailAnimation.addEventListener("animationend", animationDone)

let tirednessLevel = 50;
let hungerLevel = 50;
let boredomLevel = 50;

function updateStatusBars() {
  const tirednessBar = document.getElementById("tiredness-bar");
  const hungerBar = document.getElementById("hunger-bar");
  const boredomBar = document.getElementById("boredom-bar");

  tirednessBar.style.width = `${tirednessLevel}%`;
  hungerBar.style.width = `${hungerLevel}%`;
  boredomBar.style.width = `${boredomLevel}%`;

  tirednessBar.dataset.level = tirednessLevel;
  hungerBar.dataset.level = hungerLevel;
  boredomBar.dataset.level = boredomLevel;
}

function sleep() {
  tirednessLevel += 20;
  hungerLevel -= 10;
  boredomLevel -= 10;

  if (tirednessLevel > 100) {
    tirednessLevel = 100;
  }

  if (hungerLevel < 0) {
    hungerLevel = 0;
  }

  if (boredomLevel < 0) {
    boredomLevel = 0;
  }

  updateStatusBars();
}

function eat() {
  hungerLevel += 20;
  boredomLevel -= 10;

  if (hungerLevel > 100) {
    hungerLevel = 100;
  }

  if (boredomLevel < 0) {
    boredomLevel = 0;
  }

  updateStatusBars();
}

function play() {
  boredomLevel += 20;
  tirednessLevel -= 10;

  if (boredomLevel > 100) {
    boredomLevel = 100;
  }

  if (tirednessLevel < 0) {
    tirednessLevel = 0;
}

updateStatusBars();
}

function setupEventListeners() {
const sleepButton = document.getElementById("sleep-button");
const eatButton = document.getElementById("eat-button");
const playButton = document.getElementById("play-button");

sleepButton.addEventListener("click", sleep);
eatButton.addEventListener("click", eat);
playButton.addEventListener("click", play);
}

function init() {
updateCatName();
updateStatusBars();
setupEventListeners();
}

init();

// Sander
// W3Schools