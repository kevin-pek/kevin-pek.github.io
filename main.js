document.addEventListener('DOMContentLoaded', function() {
  /*$('#page1').addClass("fadein");
  document.querySelector('#page1').addEventListener('animationend', () => {
    $('#page1').removeClass("fadein");
    document.querySelector('#page1').style.opacity = 1;
  });*/
})

// used for sidebar button scrolling
function NavigateTo(pageId) {
	let page = document.querySelector("#page"+pageId);
  window.scrollTo({
    top: page.offsetTop + window.innerHeight / 4,
    behavior: 'smooth'
  });
}

// used by parallax.js script 
function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
