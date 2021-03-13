var btn = $(".js-scroll-top");

$(window).scroll(function () {
  $toEnd = $(document).height() - $(document).scrollTop() - $(window).height();

  if ($(window).scrollTop() > 700 && $toEnd > 700) {
    btn.addClass("opacity-100");
  } else {
    btn.removeClass("opacity-100");
  }
});
