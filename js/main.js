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

  // resize image map on Solutions page
  $('map').imageMapResize();

  // add highlight on image map
  $('.imagemap').maphilight({
    fillColor: 'efe0df',
    fillOpacity: 0.2,
    stroke: false,
    fade: true,
  });

  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') ==
          this.pathname.replace(/^\//, '') &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate(
            {
              scrollTop:
                target.offset().top - ($('#header').innerHeight() + 50),
            },
            1000,
            function() {
              navToggle.setAttribute('aria-expanded', 'false');
              navMenu.classList.remove('is-active');
            },
          );
        }
      }
    });

  window.onload = function() {
    if (window.location.hash != '') {
      let offset = document.querySelector(window.location.hash).offsetTop;
      window.scrollTo(
        0,
        offset - (document.querySelector('#header').clientHeight + 50),
      );
    }
  };

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
    slideMargin: 0,
    pager: false,
    mode: 'fade',
    controls: true,
    enableDrag: false,
  });

  $('.gallery-slider').lightSlider({
    gallery: true,
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
    },
    responsive: [
      {
        breakpoint: 960,
        settings: {
          thumbItem: 5,
        },
      },
    ],
  });
});
