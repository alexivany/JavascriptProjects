const button = document.getElementById("button");

const clrText = document.getElementById("current-colour");

const clrBg = document.getElementById("colour");

function randomColor() {
  const randomBetween = (min, max) =>
    min + Math.floor(Math.random() * (max - min + 1));
  const r = randomBetween(0, 255);
  const g = randomBetween(0, 255);
  const b = randomBetween(0, 255);
  const rgb = `${r},${g},${b}`;
  return rgb;
}

function changeColour() {
  console.log("clicked");
  const newClr = randomColor();
  clrText.textContent = newClr;
  clrBg.style.backgroundColor = `rgb(${newClr})`;
}

button.addEventListener("click", changeColour);