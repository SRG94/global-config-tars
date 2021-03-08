$(document).ready(function(){
$('.demo-slider').slick({
	infinite: true,
	arrows: true,
	slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: false,
  prevArrow: '<span class="slick-prev slider-arrow _prev" aria-label="previous"></span>',
  nextArrow: '<span class="slick-next slider-arrow _next" aria-label="next"></span>',
    // the magic
    responsive: [{

        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          infinite: true
        }

      }, {

        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true
        }

      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
      ]
});
});
