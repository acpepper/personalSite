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
    tracking = $(".slick-track", $slider).css("transform");
    tracking = parseInt(tracking.split(",")[5]);
    rightTracking = $(".slideshow-right .slick-track").css("transform");
    rightTracking = parseInt(rightTracking.split(",")[5]);
  })
  .on("mousemove touchmove", function () {
    if (dragging) {
      newTracking = $(".slideshow-left .slick-track").css("transform");
      newTracking = parseInt(newTracking.split(",")[5]);
      diffTracking = newTracking - tracking;
      $(".slideshow-right .slick-track").css({
        transform:
          "matrix(1, 0, 0, 1, 0, " + (rightTracking - diffTracking) + ")",
      });
    }
  })
  .on("mouseleave touchend mouseup", function () {
    dragging = false;
  });
