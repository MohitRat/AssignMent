$(function () {

  var $slider = $('.gallery-slider');

  $slider.on('init reInit afterChange', function (event, slick, currentSlide) {

    // currentSlide undefined on init
    var i = (currentSlide ? currentSlide : 0);

    // HIDE PREV on first slide
    if (i === 0) {
      $('.slick-prev').hide();
    } else {
      $('.slick-prev').show();
    }

    // HIDE NEXT on last slide
    if (i >= slick.slideCount - slick.options.slidesToShow) {
      $('.slick-next').hide();
    } else {
      $('.slick-next').show();
    }

  });

  // initialize slider
  $slider.slick({
    slidesToShow: 3.5,
    slidesToScroll: 1,
    infinite: false,
    arrows: true,
    dots: false,
    centerMode: false,
    variableWidth: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ] ,
    prevArrow: '<button type="button" class="slick-prev"><img src="./Right arrow.png"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="./Right arrow.png"></button>'
  });

});

