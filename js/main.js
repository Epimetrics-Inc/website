$(document).ready(function() {
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
});