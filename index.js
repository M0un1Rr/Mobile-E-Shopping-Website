$(document).ready(function () {
  //banner for owl
  $("#banner-area .owl-carousel").owlCarousel({
    dots: true,
    items: 1,
  });

  //top sale
  $("#top-sale .owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    responsiveClass: true,
    responsive: { 0: { items: 1 }, 600: { items: 3 }, 1000: { items: 5 } },
  });
});
