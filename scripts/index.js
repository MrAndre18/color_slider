$(document).ready(() => {
  const slider = $(".slider"),
    menuItems = $(".slider__menu-item");

  dragBlock(slider);
  $.each(menuItems, (index, item) => {
    $(item).click(() => {
      switchMenu(menuItems, item);
    });
  });
});

const dragBlock = (slider) => {
  slider.draggable({
    containment: "document",
  });
};

const switchMenu = (menuItems, item) => {
  $.each(menuItems, (index, element) => {
    if (element === item) $(element).addClass("slider__menu-item_active");
    else $(element).removeClass("slider__menu-item_active");
  });
};
