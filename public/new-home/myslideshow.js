var $slider = $(".slider .slider-item");
var maxItems = $(".slider-item").length;
var dragging = false;
var tracking;

$(".slider")
  .slick({
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    infinite: true,
    dots: true,
    speed: 1000,
    cssEase: "cubic-bezier(0.7, 0, 0.3, 1)",
  })
  .on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    if (
      currentSlide > nextSlide &&
      nextSlide == 0 &&
      currentSlide == maxItems - 1
    ) {
      $(".slider").slick("slickGoTo", -1);
    } else if (
      currentSlide < nextSlide &&
      currentSlide == 0 &&
      nextSlide == maxItems - 1
    ) {
      $(".slider").slick("slickGoTo", maxItems);
    } else {
      $(".slider").slick("slickGoTo", maxItems - 1 - nextSlide);
    }
  })
  .on("mousewheel", function (event) {
    event.preventDefault();
    if (event.deltaX > 0 || event.deltaY < 0) {
      $(this).slick("slickNext");
    } else if (event.deltaX < 0 || event.deltaY > 0) {
      $(this).slick("slickPrev");
    }
  })
  .on("mousedown touchstart", function () {
    dragging = true;
    tracking = $(".slick-track", ".slider").css("transform");
    tracking = parseInt(tracking.split(",")[5]);
  })
  .on("mousemove touchmove", function () {
    if (dragging) {
      newTracking = $(".slick-track").css("transform");
      newTracking = parseInt(newTracking.split(",")[5]);
      diffTracking = newTracking - tracking;
      $(".slick-track").css({
        transform: "matrix(1, 0, 0, 1, 0, " + (tracking - diffTracking) + ")",
      });
    }
  })
  .on("mouseleave touchend mouseup", function () {
    dragging = false;
  });
