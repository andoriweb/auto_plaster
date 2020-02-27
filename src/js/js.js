    /*Slick-slider*/
    
$(document).ready(function(){
  $('.adventage-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>',
          autoplay: true,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>',
          autoplay: true,
          infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>',
          autoplay: true,
          infinite: true
        }
      }
    ]
  });
});