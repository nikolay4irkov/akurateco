const $dropdownBtn = $(".js-nav-btn");
const $dropdownContent = $(".js-nav-content");
const $navColumn = $(".js-nav-col");

$(".js-nav-btn").hover(
  function () {
    $dropdownContent.removeClass("hidden");
    $navColumn.removeClass("bg-lightGreen");

    let targetedColumn = $(this).data("target");
    $(`#${targetedColumn}`).addClass("bg-lightGreen");
  },
  function () {
    $dropdownContent.addClass("hidden");
    $navColumn.removeClass("bg-lightGreen");
  }
);
