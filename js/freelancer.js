
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

// Show an element
var show = function (elem) {
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
var hide = function (elem) {
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
    		hide(content);
        this.classList.remove('active-block');
    		return;
    	}
    	show(content);
      this.classList.add('active-block');
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

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // // Activate scrollspy to add active class to navbar items on scroll
  // $('body').scrollspy({
  //   target: '#mainNav',
  //   offset: 80
  // });

  //
  // // Modal popup$(function () {
  // $('.portfolio-item').magnificPopup({
  //   type: 'inline',
  //   preloader: false,
  //   focus: '#username',
  //   modal: true
  // });
  // $(document).on('click', '.portfolio-modal-dismiss', function(e) {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });
