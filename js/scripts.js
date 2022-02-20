$(document).ready(function () {
  $(".clickable").click(function () {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  // $(".click").click(function () {
  //   $("#fade").fadeToggle();
  // });

  $("#clickToFade").click(function () {
    $("#clickToFadeTarget").fadeToggle();
  });

  $("#clickToSlide").click(function () {
    $("#clickToSlideTarget").slideToggle();
  });
});
