"use strict";

const container = document.querySelector(".container");
let div;
for (let i = 0; i < 256; i++) {
  div = document.createElement("div");
  div.classList.add("square");
  container.appendChild(div);
}

let square = document.querySelectorAll(".square");
// console.log(square);
div = document.querySelector("div");

for (let i = 0; i < square.length; i++) {
  square[i].addEventListener("mouseover", (e) => {
    square[i].style.backgroundColor = "black";
  });
}
