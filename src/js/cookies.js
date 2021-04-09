$(function () {
  const agreed = localStorage.getItem("cookie");

  // console.log(agreed);

  if (agreed === null) {
    $(".modal--cookie").addClass("is-open");
  }
});

$(".modal--cookie .js-cookie-btn").on("click", function (e) {
  e.preventDefault();

  localStorage.setItem("cookie", true);

  $(".modal--cookie").removeClass("is-open");
});
