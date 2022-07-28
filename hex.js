/*const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  const randomNumber = randomNum();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
});
function randomNum() {
  return Math.floor(Math.random() * colors.length);
}*/ const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");
btn.addEventListener("click", function () {
  let hexNum = "#";
  for (let i = 0; i < 6; i++) {
    hexNum += hex[randomNum()];
  }
  //   console.log(hexNum);
  color.textContent = hexNum;
  document.body.style.backgroundColor = hexNum;
});

function randomNum() {
  return Math.floor(Math.random() * hex.length);
}
