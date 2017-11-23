/*jshint esversion: 6 */

$(function() {//OPS
  $('.maincontent').onepage_scroll({
    loop: false,
    animationTime: 500
  });
  $('.link-2').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(2);
 });
  $('.link-3').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(3);
 });
  $('.link-4').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(4);
 });
  $('.link-5').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(5);
 });
  $('.link-6').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(6);
 });
  $('.link-7').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(7);
 });
  $('.link-8').click(function (e) { 
       e.preventDefault();
       $('.maincontent').moveTo(8);
 });
 });


$(function() {//модалки в ревью
 $('.review__button').click(function (e) { 
      e.preventDefault();
      const modalScroll = $("body");
      modalScroll.disablescroll();
          let $this = e.currentTarget;
          let thisText = $(this).prev('.review__text');
          let text = thisText.text();
          swal(text, {button: 'закрыть'}).then((value) => {
            modalScroll.disablescroll("undo");
          });
});

});



//слайдер
$(window).on('load',function() {
      
    let owl = $('.owl-carousel');
    owl.owlCarousel({
      items: 1,
      loop: true, 
      nav: true
    });
  
    $('.burgers-list').click(function (e) {
      e.preventDefault();
      owl.trigger('next.owl.carousel', [300]);
    });
  
    $('.burgers-controls_prev').click(function (e) {
      e.preventDefault();
      owl.trigger('prev.owl.carousel', [300]);
    });



  
});



//аккордеон секции команда
$(function () {
  $(".team-acco__trigger").click(function (e) {
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
      otherContent.css({
        height: 0
      });
      currentContent.css({
        height: reqHeight
      });
    } else {
      item.removeClass("team-acco__item_active");
      currentContent.css({
        height: 0
      });
    }
  });

  $(document).mouseup(function (e) { //клик за пределами аккордеона
    const container = $(".team-acco__item");
    if (container.has(e.target).length === 0) {
      container.removeClass("team-acco__item_active");
      $(".team-acco__content").css({
        height: 0
      });
    }
  });

});

//аккордеон секции меню
$(function () {
  $(".menu__acco-item").click(function (e) {
    const $this = $(e.currentTarget);
    if (!$this.hasClass("menu__acco-item--active")) {
      $this.siblings().find(".menu__acco-description-wrap").css({
        opacity: "0"
      });
      setTimeout(() => {
        $this.siblings().removeClass("menu__acco-item--active");
        $this.addClass("menu__acco-item--active");
      }, 250);
      setTimeout(() => {
        $this.find(".menu__acco-description-wrap").css({
          opacity: "1"
        });
      }, 700);
    } else {
      $(".menu__acco-description-wrap").css({
        opacity: "0"
      });
      setTimeout(() => {
        $this.removeClass("menu__acco-item--active");
      }, 250);
    }
  });

  $(document).mouseup(function (e) { //клик за пределами аккордеона
    const container = $(".menu__acco-item");
    if (container.has(e.target).length === 0) {
      $(".menu__acco-description-wrap").css({
        opacity: "0"
      });
      setTimeout(() => {
        container.removeClass("menu__acco-item--active");
      }, 250);
    }
  });

});

//меню в первой секции
$(function () {
  const menuScroll = $("body"); 
  $(".hamburger").click(e => {
     
    const $this = e.currentTarget;
    e.preventDefault();
    if (!$(".mobile-menu").hasClass('mobile-menu_position_active')) {
      $(".mobile-menu").addClass('mobile-menu_position_active');
      $(".mobile-menu").addClass('mobile-menu_opacity');
      menuScroll.disablescroll();

    } else {
      $(".mobile-menu").removeClass('mobile-menu_opacity');
      setTimeout(() => {
        $(".mobile-menu").removeClass('mobile-menu_position_active');
      }, 300);
      menuScroll.disablescroll("undo");
    }
  });

  $('.mobile-menu__item').click(e => { //при клике отключаем меню
    $(".mobile-menu").removeClass('mobile-menu_opacity');
    setTimeout(() => {
      $(".mobile-menu").removeClass('mobile-menu_position_active');
    }, 300);
    menuScroll.disablescroll("undo");
  });

  $('.mobile-menu__close').click(e => { //закрытие по крестику
    $(".mobile-menu").removeClass('mobile-menu_opacity');
    setTimeout(() => {
      $(".mobile-menu").removeClass('mobile-menu_position_active');
    }, 300);
    menuScroll.disablescroll("undo");
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