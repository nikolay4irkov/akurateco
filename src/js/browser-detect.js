import browser from "browser-detect";

const result = browser();
// console.log(result);

if (result.name === "safari") {
  $("body").addClass("is-safari");
}
