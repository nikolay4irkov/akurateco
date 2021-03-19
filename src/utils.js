export const parseClasses = (classesString = "{}") => {
  try {
    return JSON.parse(classesString.replace(/'/g, '"'));
  } catch (error) {
    console.log(error);
  }
};

export const changeElementClasses = ($el, classes) => {
  $el.removeClass(classes.unactive).addClass(classes.active);
  $el.siblings().removeClass(classes.active).addClass(classes.unactive);
};
