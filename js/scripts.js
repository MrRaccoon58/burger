/*jshint esversion: 6 */
$(function() {
  //аккордеон секции команда
  $(".team-acco__trigger").click(function(e) {
    e.preventDefault();
    const $this = $(e.currentTarget);
    const container = $this.closest(".team-acco");
    const item = $this.closest(".team-acco__item");
    const items = $(".team-acco__item", container);
    const currentContent = $(".team-acco__content", item);
    const otherContent = $(".team-acco__content", container);
    const innerContent = $(".team-acco__content-inner", item);
    const reqHeight = innerContent.outerHeight();

    if (!item.hasClass("team-acco__item_active")) {
      items.removeClass("team-acco__item_active");
      item.addClass("team-acco__item_active");
      otherContent.css({ height: 0 });
      currentContent.css({ height: reqHeight });
    } else {
      item.removeClass("team-acco__item_active");
      currentContent.css({ height: 0 });
    }
  });
});

$(function() {
  //аккордеон секции меню
  $(".menu__acco-item").click(function(e) {
    const $this = $(e.currentTarget);
    if (!$this.hasClass("menu__acco-item--active")) {
      $this.addClass("menu__acco-item--active");
      $this.siblings().removeClass("menu__acco-item--active");
      setTimeout(() => {
        $this.find(".menu__acco-description-wrap").css({ opacity: "1" });
      }, 450);
    } else {
      $(".menu__acco-description-wrap").css({ opacity: "0" });
      setTimeout(() => {
        $this.removeClass("menu__acco-item--active");
      }, 450);
    }
  });
});

$(function() {
  //меню в первой секции

  $(".mobile-menu").hide();
  $(".hamburger").click(e => {
    e.preventDefault();
    $(".mobile-menu").fadeToggle(300, "linear");
    if ($(".hamburger__bars").hasClass("bars-active")) {
      //вернуть меню
      $(".mobile-hamburger__bars").fadeOut(300);
      $(".hamburger__bars").animate({ left: "0" }, 300);
      $(".hamburger__bars").removeClass("bars-active");
    } else {
      //спрятать меню
      $(".mobile-hamburger__bars").removeClass("vh");
      $(".mobile-hamburger__bars").fadeIn(300);
      $(".hamburger__bars").animate({ left: "50px" }, 300);
      $(".hamburger__bars").addClass("bars-active");
    }
  });
});
