/*jshint esversion: 6 */
//аккордеон секции команда
$(function() {
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

  $(document).mouseup(function (e) { //клик за пределами аккордеона
    const container = $(".team-acco__item");
    if (container.has(e.target).length === 0){
      container.removeClass("team-acco__item_active");
      $(".team-acco__content").css({ height: 0 });
    }
});

});

//аккордеон секции меню
$(function() {
  $(".menu__acco-item").click(function(e) {
    const $this = $(e.currentTarget);
    if (!$this.hasClass("menu__acco-item--active")) {
        $this.siblings().find(".menu__acco-description-wrap").css({ opacity: "0" });
        setTimeout(() => {
        $this.siblings().removeClass("menu__acco-item--active");
        $this.addClass("menu__acco-item--active");
        }, 250);
        setTimeout(() => {
      $this.find(".menu__acco-description-wrap").css({ opacity: "1" });
      }, 700);
    } else {
      $(".menu__acco-description-wrap").css({ opacity: "0" });
      setTimeout(() => {
        $this.removeClass("menu__acco-item--active");
      }, 250);
    }
  });

  $(document).mouseup(function (e) { //клик за пределами аккордеона
    const container = $(".menu__acco-item");
    if (container.has(e.target).length === 0){
      $(".menu__acco-description-wrap").css({ opacity: "0" });
      setTimeout(() => {
        container.removeClass("menu__acco-item--active");
      }, 250);
    }
});

});

//меню в первой секции
$(function() {
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

//yandex карты
function yamaps() {
  ymaps.ready(init);
  function init() {
    var myMap = new ymaps.Map("map", {
        center: [56.015, 92.87],
        zoom: 12,
        controls: []
      }),
      burgerCollection = new ymaps.GeoObjectCollection(null, {
        iconLayout: "default#image",
        iconImageHref: "./images/8-contacts/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [0, -40]
      }),
      krskBurgersCoords = [
        [56.01183725, 92.82266731],
        [56.01017297, 92.85667715],
        [55.99333977, 92.89615927],
        [56.03774808, 92.89564428]
      ];
    for (var i = 0, l = krskBurgersCoords.length; i < l; i++) {
      burgerCollection.add(new ymaps.Placemark(krskBurgersCoords[i]));
    }
    myMap.geoObjects.add(burgerCollection);
    myMap.behaviors.disable("scrollZoom");
  }
}
yamaps();
