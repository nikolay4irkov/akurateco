let userScrollTop = 0;
const $header = $(".js-header");
const $body = $("body");

$(window).on("scroll", toggleHeaderVisibility);

function toggleHeaderVisibility() {
  const windowScrollTop = $(this).scrollTop();

  if (
    windowScrollTop > userScrollTop &&
    userScrollTop > 50 &&
    !$body.hasClass("is-static")
  ) {
    $header.addClass("is-hidden");
  } else {
    $header.removeClass("is-hidden");
  }

  userScrollTop = windowScrollTop;
}
