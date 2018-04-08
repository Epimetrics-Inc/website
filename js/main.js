$(document).ready(function() {
	// for navbar
			var navToggle = document.querySelector('#show-nav');
			var navMenu = document.querySelector('.main-nav');
			
			navToggle.addEventListener('click', function() {
				if (navMenu.classList.contains('is-active')) {
					this.setAttribute('aria-expanded', 'false');
					navMenu.classList.remove('is-active');
				} else {
					navMenu.classList.add('is-active');
					this.setAttribute('aria-expanded', 'true');
				}
			});

	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      console.log(target)
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top - ($('#header').height() + 50)
	        }, 1000, function() {
	        	// TODO: add a minus offset if nanggaling sa ibang screen
	        });
	      }
	    }
	  });

	$('#above-fold-slider').lightSlider({
		auto: true,
		item: 1,
		loop: true,
		pause: 5000,
		speed: 2000,
		slideMargin: 0,
		pager: false,
		mode: 'fade',
		controls: false,
		enableDrag: false,
	});

	$('#about-us-slider').lightSlider({
		auto: true,
		item: 1,
		loop: true,
		pause: 5000,
		speed: 1000,
		pager: false,
		mode: 'slide',
		controls: true,
	});

	$('.gallery-slider').lightSlider({
		gallery: true,
		// thumbItem: 5,
		thumbMargin: 10,
		item: 1,
		loop: true,
		pauseOnHover: true,
		sliderMargin: 0,
		enableDrag: false,
		mode: 'fade',
		currentPagerPosition: 'middle',
		onSliderLoad: function(e) {
			e.lightGallery({
				selector: '.gallery-slider .lslide',
			});
		}
	});
});