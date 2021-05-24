document.addEventListener('DOMContentLoaded', function() {
  let landingPage = document.getElementById("page1");
  $("#page1").addClass("fadein");
  landingPage.addEventListener('animationend', () => {
    $("#page1").removeClass("fadein");
    landingPage.style.opacity = 1;
  });
	document.querySelectorAll('.navigation-button', function (button) {
    button.addEventListener('click', NavigateTo(button.dataset.pageId));
  });
  NavigateTo(1);
  //document.addEventListener('scroll', FadeCheck());
})

function NavigateTo(pageId) {
	let page = document.querySelector("#page"+pageId);
  //console.log(page.offsetTop);
  window.scrollTo({
    top: page.offsetTop,
    behavior: 'smooth'
  });
}

// callback function for fracs plugin
function callback (fracs, prev_fracs) {
  //console.log(this);
  if (fracs.visible > 0.5 && this.style.opacity == 0){
    $(this).addClass("fadein");
    this.addEventListener('animationend', () => {
      $(this).removeClass("fadein");
      this.style.opacity = 1;
    });
  }
  else if (fracs.visible < 0.5 && this.style.opacity == 1) {
    $(this).addClass("fadeaway");
    this.addEventListener('animationend', () => {
      $(this).removeClass("fadeaway");
      this.style.opacity = 0;
    });
  }
};

// checks how much of each queried div is visible
$(window).scroll(function () {
  $(".content-block").fracs(callback);
  $('.page-content').fracs(callback);
  //console.log(fracs);
});

function setTranslate(xPos, yPos, el) {
  el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)";
}
/*
// parallax scrolling plugin
  $.fn.parallax = function(options){
    var $$ = $(this);
    offset = $$.offset();
    var defaults = {
      'start': 0,
      'stop': offset.top + $$.height(),
      'coeff': 0.95
    };
    var opts = $.extend(defaults, options);
    return this.each(function(){
      $(window).bind('scroll', function() {
        windowTop = $(window).scrollTop();
        if((windowTop >= opts.start) && (windowTop <= opts.stop)) {
          newCoord = windowTop * opts.coeff;
          $$.css({
              'background-position': '0 '+ newCoord + 'px'
          });
        }
      });
    });
  }
*/
// call the plugin
// $('.bg-content').parallax({ 'coeff':-0.65 });
// $('.section .inner').parallax({ 'coeff':1.15 });
