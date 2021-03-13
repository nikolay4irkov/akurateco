const $submenuToggler = $(".js-submenu-toggler");
const $submenu = $(".js-submenu");

$submenuToggler.on("click", function () {
  $(this).toggleClass("is-active");
  $(this).closest(".submenu-wrapper").children(".js-submenu").slideToggle(300);
});
