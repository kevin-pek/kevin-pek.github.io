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
  setTranslate(0, yScrollPosition * -0.15, document.querySelector(".page-bg"));
  setTranslate(0, yScrollPosition * -0.05, document.querySelector("#title-text"));
  // We use requestAnimationFrame to target the GPU instead of the CPU
  requestAnimationFrame(scrollLoop);
}
