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
    autoplay: false,
    infinite: true,
    responsive: [
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: '<button class="arrow prev"></button>',
          nextArrow: '<button class="arrow next"></button>',
          autoplay: false,
          infinite: true
        }
      },
    ]
  });
});

$(document).ready(function(){
  $('.calculator-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    prevArrow: '<button class="arrow prev arrow-none"></button>',
    // prevArrow: '<button class="arrow next arrow-none"></button>',
    autoplay: false,
    infinite: false
  });
});

/* Modals */
/* Modal-prices */
$(document).ready(function(){
  $('.prices-block-button').on("click", function(){
    $('.overlay-prices').show();
  });
  $('.popup-prices__close').on("click", function(){
    $('.overlay-prices').hide();
  });
});

/* Modal-calculator */
$(document).ready(function(){
  $('.prices-button').on("click", function(){
    $('.overlay-calculator').show();
  });
  $('.popup-calculator__close').on("click", function(){
    $('.overlay-calculator').hide();
  });
});

/* Modal-service */
$(document).ready(function(){
  $('.servise-button').on("click", function(){
    $('.overlay-service').show();
  });
  $('.popup-service__close').on("click", function(){
    $('.overlay-service').hide();
  });
});