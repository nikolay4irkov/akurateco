import { parseClasses, changeElementClasses } from "../utils";
const $tabHeading = $(".js-tab-heading");

$tabHeading.on("click", (event) => {
  event.preventDefault();
  const $el = $(event.currentTarget);
  const classes = parseClasses($el.data("classes"));
  const tabAnchor = $el.data("tabAnchor");

  changeElementClasses($el, classes);

  const tabContents = $(`[data-tab-key=${tabAnchor}]`);

  for (let content of tabContents) {
    const $content = $(content);
    const contentClasses = parseClasses($content.data("classes"));

    changeElementClasses($content, contentClasses);
  }
});
