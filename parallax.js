// PARALLAX SCROLLING
// Add event Listenter to Window
window.addEventListener("DOMContentLoaded", scrollLoop, false);

// Define position variables
let xScrollPosition;
let yScrollPosition;

// Scroll function
function scrollLoop() {
  xScrollPosition = window.pageXOffset;
  yScrollPosition = window.pageYOffset;

  // We only change the Y variable
  setTranslate(0, yScrollPosition * -0.15, document.querySelector("#landing-bg"));
  setTranslate(0, yScrollPosition * -0.05, document.querySelector("#title-text"));
  //setTranslate(0, yScrollPosition * -0.25, document.querySelector("#site-bg"));
  setTranslate(0, yScrollPosition * document.querySelector("#c1").dataset.parallax, document.querySelector("#c1"));
  setTranslate(0, yScrollPosition * document.querySelector("#c2").dataset.parallax, document.querySelector("#c2"));
  setTranslate(0, yScrollPosition * document.querySelector("#c3").dataset.parallax, document.querySelector("#c3"));
  setTranslate(0, yScrollPosition * document.querySelector("#lines-bg").dataset.parallax, document.querySelector("#lines-bg"));
  setTranslate(0, yScrollPosition * document.querySelector("#lines-bg2").dataset.parallax, document.querySelector("#lines-bg2"));
  // We use requestAnimationFrame to target the GPU instead of the CPU
  requestAnimationFrame(scrollLoop);
}
