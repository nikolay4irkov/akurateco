const $accordionTitle = $(".js-accordion-title");
const $accordionText = $(".js-accordion-content");

$(document).ready(function () {
  //working, but all are hidden
  // $accordionText.fadeOut(0);

  //working, but badly
  // $accordionText.fadeOut(0);
  // $(".js-accordion-content:first").fadeIn();

  //working better:)
  $(".js-accordion-content:not(:first)").fadeOut(0);
});

$accordionTitle.on("click", toggleAccordionContent);

function toggleAccordionContent() {
  $accordionText.not($(this).next()).slideUp("fast");

  $(this).next().slideToggle(300);

  if ($(this).hasClass("is-active")) {
    $(this).toggleClass("is-active");
  } else {
    $accordionTitle.removeClass("is-active");
    $(this).toggleClass("is-active");
  }
}
