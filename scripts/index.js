$(document).ready(() => {
  const slider = $(".slider"),
    slides = $(".slider__slide"),
    sliderExample = $(".slider__example"),
    menuItems = $(".slider__menu-item");

  setSlides(slides, $(".slider__menu-item_active").data("type"), sliderExample);
  dragBlock(slider);

  $(menuItems).each((index, item) => {
    $(item).click(() => {
      switchMenu(menuItems, item, slides, sliderExample);
    });
  });
});

const dragBlock = (slider) => {
  slider.draggable({
    containment: "document",
    scroll: false,
    opacity: 0.9,
    handle: ".slider__draggable-helper",
  });
};

const setSlides = (slides, property, example) => {
  let value = example.css(property),
    values = [];

  value = value.slice(value.indexOf("(") + 1, value.indexOf(")"));
  values = value.split(", ");

  slides.slider({
    animate: "slow",
    min: 0,
    max: 255,
  });

  $(slides).each((index, element) => {
    $(element).slider("value", values[index]);
  });
};

const setExampleProperty = (type) => {
  console.log("type: ", type);
};

const switchMenu = (menuItems, item, slides, example) => {
  let activeElement;
  $.each(menuItems, (index, element) => {
    if (element === item) {
      activeElement = element;
      $(element).addClass("slider__menu-item_active");
    } else $(element).removeClass("slider__menu-item_active");
  });

  setSlides(slides, $(activeElement).data("type"), example);
};
