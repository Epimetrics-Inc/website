$(document).ready(function() {
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
		item: 1,
		loop: true,
		sliderMargin: 0,
		enableDrag: false,
		mode: 'fade',
		currentPagerPosition: 'left',
		onSliderLoad: function(e) {
			e.lightGallery({
				selector: '.gallery-slider .lslide',
			});
		}
	});
});