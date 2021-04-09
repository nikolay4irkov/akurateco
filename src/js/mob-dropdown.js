const $submenuWrapper = $(".js-submenu-wrapper");
const $submenuToggler = $(".js-submenu-toggler");

$(document).ready(function () {
  let $targetedSubmenu = $(".js-submenu-wrapper.active");
  $targetedSubmenu.children(".js-submenu-toggler").trigger("click");
});
