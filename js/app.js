AOS.init({
  duration: 1200,
});

$(".hero-slider").slick({
  dots: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  slidesToShow: 1,
  slidesToScroll: 1,
});

// make the nav sticky after scrolling 20 px
$(window).scroll(function () {
  if ($(this).scrollTop() > 20) {
    $("nav").addClass("sticky");
  } else {
    $("nav").removeClass("sticky");
  }
});
