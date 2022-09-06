$(function () {
  var mixer = mixitup('.popular-products');
});

$(function () {
  $('.slider').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $('.slider-nav__prev'),
    nextArrow: $('.slider-nav__next'),
    appendDots: '.slider-nav__dots'
  });
});

const headerHeight = $('.header__inner').outerHeight();

$(".menu__item a").on("click", function (e) {
  e.preventDefault();

  const scrollAnchor = $(this).attr('href');

  let scrollPoint = $(scrollAnchor).offset().top - headerHeight;

  $('body,html').animate({ scrollTop: scrollPoint }, 1500);
});

var $document = $(document);

$document.scroll(function () {
  if ($document.scrollTop() >= 50) {
    $('.header__inner').css('padding', '15px');
  } else {
    $('.header__inner').css('padding', '60px');
  }
});