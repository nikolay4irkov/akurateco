const $form = $(".js-form");

$form.on("submit", function (e) {
  e.preventDefault();

  let successModal = $(this).data("success-modal");
  let phpUrl = $(this).attr("action");

  sendAjaxSubscribeForm($(this), phpUrl, successModal);
});

function sendAjaxSubscribeForm(form, url, successModal) {
  console.log(form, url, successModal);

  $.ajax({
    url: url,
    type: "POST",
    dataType: "text",
    data: form.serialize(),
    success: function success() {
      $(`#${successModal}`).addClass("is-open");
      $(".js-modal-bg").addClass("is-open");
    },

    error: function error(response) {
      console.log(response);
    },
  });
}
