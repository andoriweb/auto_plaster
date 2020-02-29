    /*Slick-slider*/
$(document).ready(function(){
  $('.adventage-slider, .materil-slider').slick({
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

$(document).ready(function(){
  $('.feetback-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: '<button class="arrow prev feetback-arrow feetback-prev"></button>',
    nextArrow: '<button class="arrow next feetback-arrow feetback-next"></button>',
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>',
          autoplay: true,
          infinite: true
        }
      },
    ]
  });
});