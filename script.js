"use strict";

const container = document.querySelector(".container");
const body = document.querySelector("body");
let div = document.createElement("div");
const btn = document.createElement("button");
btn.textContent = "Create Etch-a-Sketch";
div.appendChild(btn);
body.prepend(div);
let side;
let square = document.querySelectorAll(".square");

const getSide = function () {
  side = prompt("How many squares per side do you want on your Etch-a-Sketch?");
  while (isNaN(side) || side > 64 || side < 0) {
    side = prompt(
      `${side} is not a valid value. You need to insert a number beetween 1 and 64`
    );
  }
  if (side == null) side = 16;
  return side;
};

const getGrid = function () {
  side = getSide();

  for (let i = 0; i < side ** 2; i++) {
    div = document.createElement("div");
    div.classList.add("square");
    container.appendChild(div);
    square = document.querySelectorAll(".square");
    square[i].addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "#98012e";
      opacityChanger(e);
    });
    square[i].style.width = `${100 / side}%`;
    square[i].style.paddingBottom = `${100 / side}%`;
  }
};

const removeGrid = function () {
  square.forEach((item) => {
    container.removeChild(item);
  });
};

const checkIfGrid = function () {
  if (square.length > 0) {
    removeGrid();
    getGrid();
  } else {
    getGrid();
  }
};

const opacityChanger = function (square) {
  let opacityValue = parseFloat(square.target.style.opacity || 0);
  if (opacityValue < 1) opacityValue += 0.1;
  square.target.style.opacity = opacityValue.toString();
};

btn.addEventListener("click", checkIfGrid);
