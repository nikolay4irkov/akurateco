const $modalClose = $(".js-modal-close");
const $modalCall = $(".js-modal-call");
const $modalBg = $(".js-modal-bg");
const $body = $("body");

$modalClose.on("click", function (e) {
  e.preventDefault();
  $(".modal.is-open").removeClass("is-open");
  $modalBg.removeClass("is-open");
  $body.removeClass("is-static");
});

$modalCall.on("click", function (e) {
  e.preventDefault();
  let targetedModal = $(this).data("modal-target");

  $(`#${targetedModal}`).addClass("is-open");
  $modalBg.addClass("is-open");
  // $body.addClass("is-static");
});
