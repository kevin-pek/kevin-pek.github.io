//selectedPage will determine which div in the website to load
window.addEventListener('scroll', () => {
  document.body.style.setProperty('--scroll',window.pageYOffset / (document.getElementById("landing-page").offsetHeight - window.innerHeight));
}, false);
/*
let selectedPage = 1;

document.addEventListener('DOMContentLoaded', function() {
	let button = document.querySelector('.navigation-button');
	button.addEventListener('click', navigateTo(button));
})

function navigateTo(button) {
	document.querySelectorAll('.page').forEach(function (page) {
		if (page.id != button.dataset.pageId) {
			page.style.display = 'none';
		} else {
			selectedPage = page;
		}
	});
}

// parallax scrolling plugin
(function($){
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
  };
});*/

// call the plugin
// $('.section').parallax({ 'coeff':-0.65 });
// $('.section .inner').parallax({ 'coeff':1.15 });
