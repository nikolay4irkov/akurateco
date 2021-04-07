const $visibleElement = $(".js-visible");

function run() {
  $visibleElement.each(function () {
    let isVisible = $(this)[0].getBoundingClientRect().top + 0;

    if (isVisible <= $(window).height()) {
      $(this).addClass("is-visible");
    }
  });
}

$(window).on("scroll", function () {
  run();
});

run();
