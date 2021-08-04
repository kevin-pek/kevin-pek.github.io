document.addEventListener('DOMContentLoaded', function() {
  /*NavigateTo(1);
  $('#page1').addClass("fadein");
    document.querySelector('#page1').addEventListener('animationend', () => {
      $('#page1').removeClass("fadein");
      document.querySelector('#page1').style.opacity = 1;
    });*/
})

function NavigateTo(pageId) {
	let page = document.querySelector("#page"+pageId);
  window.scrollTo({
    top: page.offsetTop,
    behavior: 'smooth'
  });
}

// callback function for fracs plugin
function callback (fracs, prev_fracs) {
  //console.log(this);
  if (fracs.visible > 0.5 && this.style.opacity == 0) {
    $(this).addClass("fadein");
    this.addEventListener('animationend', () => {
      $(this).removeClass("fadein");
      this.style.opacity = 1;
    });
  }
  else if (fracs.visible < 0.25 && this.style.opacity == 1) {
    $(this).addClass("fadeout");
    this.addEventListener('animationend', () => {
      $(this).removeClass("fadeout");
      this.style.opacity = 0;
    });
  }
}

function landingCallback (fracs, prev_fracs) {

}

// checks how much of each queried div is visible
$(window).scroll(function () {
  let fracs = $("#page1").fracs(callback);
  //$(".wrap").fracs(callback);
  //console.log($(".page"))
  //$(".content-block").fracs(callback);
  //$('.page-content').fracs(callback);
  //console.log(fracs);
});

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
