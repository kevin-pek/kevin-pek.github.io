//let selectedPage = 1;

document.addEventListener('DOMContentLoaded', function() {
  /*window.addEventListener('scroll', () => {
    document.body.style.setProperty('--scroll',window.pageYOffset / (document.querySelector("#page1").offsetHeight - window.innerHeight));
  }, false);*/
  /*
  let landingPage = document.getElementById("page1");
  $("#page1").addClass("fadein");
  landingPage.addEventListener('animationend', () => {
    $("#page1").removeClass("fadein");
    landingPage.style.opacity = 1;
  });*/
	/*document.querySelectorAll('.navigation-button').forEach((button) => {
    button.addEventListener('click', NavigateTo(button.dataset.pageid));
  });*/
	document.getElementById("site-bg").style.top = "100vh";
	//ChangeActivePage(1);
  NavigateTo(1);
  //document.addEventListener('scroll', FadeCheck());
})

function NavigateTo(pageId) {
	let page = document.querySelector("#page"+pageId);
  //console.log(page);
  window.scrollTo({
    top: page.offsetTop,
    behavior: 'smooth'
  });
}

function ChangeActivePage(pageId) {
  let prevPage = document.querySelector("#page"+selectedPage);
  $("#page"+selectedPage).addClass("fadeout");
  prevPage.addEventListener('animationend', () => {
    $("#page"+selectedPage).removeClass("fadeout");
    prevPage.style.opacity = 0;
    //console.log(selectedPage);
  });

  selectedPage = pageId;

  $("#page"+pageId).addClass("fadein");
  let newPage = document.querySelector("#page"+pageId);
  newPage.addEventListener('animationend', () => {
    $("#page"+pageId).removeClass("fadein");
    newPage.style.opacity = 1;
    //console.log(newPage);
  });
}

// callback function for fracs plugin
function callback (fracs, prev_fracs) {
  //console.log(this);
  if (fracs.visible > 0.5 && this.style.opacity == 0) {
    //ChangeActivePage($(this).prop('id').slice(-1));
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

// checks how much of each queried div is visible
$(window).scroll(function () {
  $(".fadeable").fracs(callback);
  //$("#page1").fracs(callback);
  //$(".wrap").fracs(callback);
  //console.log($(".page"))
  //$(".content-block").fracs(callback);
  //$('.page-content').fracs(callback);
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
