const $dropdownBtn = $(".js-nav-btn");
const $dropdownContent = $(".js-nav-content");
const $navColumn = $(".js-nav-col");

$(".js-nav-btn").hover(
  function () {
    $dropdownContent.removeClass("hidden");
    let targetedColumn = $(this).data("target");
    $(`#${targetedColumn}`).addClass("bg-lightGreen");
  },
  function () {
    $dropdownContent.addClass("hidden");
    $navColumn.removeClass("bg-lightGreen");
  }
);

$navColumn.hover(function () {
  $navColumn.removeClass("bg-lightGreen");
});

$(".js-nav-col").hover(
  function () {
    let targetedBtn = $(this).data("target");
    $(`#${targetedBtn}`).addClass("hovered");
  },
  function () {
    $dropdownBtn.removeClass("hovered");
    // $navColumn.removeClass("bg-lightGreen");
    // console.log("moved from btn");
  }
);
