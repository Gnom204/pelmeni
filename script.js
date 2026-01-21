import { Circle } from "./circle.js";
let smooth = 0;
let pelmeniCount = 0;
const pallet = document.querySelector(".root");
const palletCords = pallet.getBoundingClientRect();
const counter = document.getElementById("counter");
pallet.addEventListener("click", draw);

function draw(e) {
  const x = e.clientX;
  const y = e.clientY;
  console.log(x, y);
  console.log(palletCords);
  const circle = new Circle(45, x, y, smooth, palletCords.bottom);
  pallet.appendChild(circle.createCircle());
  pelmeniCount++;
  counter.textContent = `Пельмени: ${pelmeniCount}`;
  smooth += 25;
}
