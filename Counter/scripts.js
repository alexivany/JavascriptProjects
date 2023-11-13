let counterNum = document.getElementById(parseInt("counter"));
const counter = document.getElementById("counter");
const decreaseBtn = document.getElementById("decrease");
const resetBtn = document.getElementById("reset");
const increaseBtn = document.getElementById("increase");

increaseBtn.addEventListener("click", (e) => {
  counterNum++;
  counter.textContent = counterNum;
});

decreaseBtn.addEventListener("click", (e) => {
  counterNum--;
  counter.textContent = counterNum;
});

resetBtn.addEventListener("click", (e) => {
  counterNum = 0;
  counter.textContent = 0;
});
