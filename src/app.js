/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  var icons = ["♦", "♥", "♠", "♣"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "K", "Q", "J", "AS"];
  var iconRandom = Math.floor(Math.random() * icons.length);
  var numRandom = Math.floor(Math.random() * numbers.length);
  var pHeader = document.getElementById("header");
  var pBody = document.getElementById("body");
  var pFooter = document.getElementById("footer");
  pHeader.innerHTML = icons[iconRandom];
  pBody.innerHTML = "<b>" + numbers[numRandom] + "</b>";
  pFooter.innerHTML = icons[iconRandom];
  if (iconRandom == 0 || iconRandom == 1) {
    pHeader.style.color = "red";
    pFooter.style.color = "red";
  }
};
