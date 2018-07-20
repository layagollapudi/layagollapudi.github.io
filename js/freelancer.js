
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 70)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
});

function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}

// Main section toggle

$(document).ready(function() {
  $('#portfolio').show();
  $('#portfolio-music').hide();
  $('#toggle-tech').on('click', function() {
      $('#portfolio-music').fadeOut(1000);
      $('#portfolio').fadeIn(1000);
      $('#toggle-tech').addClass('head-selected')
      $('#toggle-music').removeClass('head-selected')
  });

  $('#toggle-music').on('click', function() {
      $('#portfolio').fadeOut(1000);
      $('#portfolio-music').fadeIn(1000);
      $('#toggle-music').addClass('head-selected')
      $('#toggle-tech').removeClass('head-selected')
  });
});

// Show an element
var show_slide = function (elem) {
	var getHeight = function () {
		elem.style.display = 'block'; // Make it visible
		var height = elem.scrollHeight + 'px'; // Get it's height
		elem.style.display = ''; //  Hide it again
		return height;
	};
	var height = getHeight(); // Get the natural height
	elem.classList.add('active'); // Make the element visible
	elem.style.height = height; // Update the max-height
	// Once the transition is complete, remove the inline max-height so the content can scale responsively
	window.setTimeout(function () {
		elem.style.height = '';
	}, 500);

};

// Hide an element
var hide_slide = function (elem) {
	elem.style.height = elem.scrollHeight + 'px';
	// Set the height back to 0
	window.setTimeout(function () {
		elem.style.height = '0';
	}, 1);
	// When the transition is complete, hide it
	window.setTimeout(function () {
		elem.classList.remove('active');
	}, 500);
};

  //collapsibility
var coll = document.getElementsByClassName("collapsible");
var i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function() {
      var content = this.nextElementSibling;
    	if (content.classList.contains('active')) {
    		hide_slide(content);
        this.classList.remove('active-block');
    		return;
    	}else{
    	   show_slide(content);
         this.classList.add('active-block');
         return;
      }
    });
  }

  // Scroll to top button appear
  $(document).scroll(function() {
    var scrollDistance = $(this).scrollTop();
    if (scrollDistance > 100) {
      $('.scroll-to-top').fadeIn();
    } else {
      $('.scroll-to-top').fadeOut();
    }
  });
