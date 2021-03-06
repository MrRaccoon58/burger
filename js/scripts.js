/*jshint esversion: 6 */

$(function() {
  //OPS
  $(".maincontent").onepage_scroll({
    loop: false,
    animationTime: 500
  });

  function ops(link, moveto) {
    $(link).click(function(e) {
      e.preventDefault();
      $(".maincontent").moveTo(moveto);
    });
  }
  ops(".link-2", 2);
  ops(".link-3", 3);
  ops(".link-4", 4);
  ops(".link-5", 5);
  ops(".link-6", 6);
  ops(".link-7", 7);
  ops(".link-8", 8);
});

$(function() {
  //модалки в ревью
  $(".review__button").click(function(e) {
    e.preventDefault();
    const modalScroll = $("body");
    modalScroll.disablescroll();
    let $this = e.currentTarget;
    let thisText = $(this).prev(".review__text");
    let text = thisText.text();
    swal(text, {
      button: "закрыть"
    }).then(value => {
      modalScroll.disablescroll("undo");
    });
  });
});

//mailto function
$(function() {
  let submitForm = function(e) {
    e.preventDefault();
    let form = $(e.target);

    let ajaxForm = function(form) {
      let url = form.attr("action"),
        data = form.serialize();

      return $.ajax({
        type: "POST",
        url: url,
        data: data,
        dataType: "JSON"
      });
    };
    let request = ajaxForm(form);

    request.done(function(msg) {
      let mes = msg.mes,
        status = msg.status;
      if (status === "OK") {
        swal(mes, {
          button: "закрыть"
        });
      } else {
        swal(mes, {
          button: "закрыть"
        });
      }
    });

    request.fail(function(jqXHR, textStatus) {
      swal("Request failed: " + textStatus, {
        button: "закрыть"
      });
    });
  };

  $("#form__burger-order").on("submit", submitForm);
});

//слайдер
$(window).on("load", function() {
  let owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true
  });

  $(".burgers-list").click(function(e) {
    e.preventDefault();
    owl.trigger("next.owl.carousel", [300]);
  });

  $(".burgers-controls_prev").click(function(e) {
    e.preventDefault();
    owl.trigger("prev.owl.carousel", [300]);
  });
});

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

  $(document).mouseup(function(e) {
    //клик за пределами аккордеона
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
$(function() {
  $(".menu__acco-item").click(function(e) {
    const $this = $(e.currentTarget);
    if (!$this.hasClass("menu__acco-item--active")) {
      $this
        .siblings()
        .find(".menu__acco-description-wrap")
        .css({
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

  $(document).mouseup(function(e) {
    //клик за пределами аккордеона
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
$(function() {
  const menuScroll = $("body");
  $(".hamburger").click(e => {
    const $this = e.currentTarget;
    e.preventDefault();
    if (!$(".mobile-menu").hasClass("mobile-menu_position_active")) {
      $(".mobile-menu").addClass("mobile-menu_position_active");
      $(".mobile-menu").addClass("mobile-menu_opacity");
      menuScroll.disablescroll();
    } else {
      $(".mobile-menu").removeClass("mobile-menu_opacity");
      setTimeout(() => {
        $(".mobile-menu").removeClass("mobile-menu_position_active");
      }, 300);
      menuScroll.disablescroll("undo");
    }
  });

  $(".mobile-menu__item").click(e => {
    //при клике отключаем меню
    $(".mobile-menu").removeClass("mobile-menu_opacity");
    setTimeout(() => {
      $(".mobile-menu").removeClass("mobile-menu_position_active");
    }, 300);
    menuScroll.disablescroll("undo");
  });

  $(".mobile-menu__close").click(e => {
    //закрытие по крестику
    $(".mobile-menu").removeClass("mobile-menu_opacity");
    setTimeout(() => {
      $(".mobile-menu").removeClass("mobile-menu_position_active");
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
    });

    let cords = [
        [56.01183725, 92.82266731],
        [56.01017297, 92.85667715],
        [55.99333977, 92.89615927],
        [56.03774808, 92.89564428]
      ],
      adress = [
        "улица 1, дом 1",
        "улица 2, дом 2", 
        "улица 3, дом 3", 
        "улица 4, дом 4", 
      ];

    function markcall(cords, adress) {
      let mark = new ymaps.Placemark(cords, {
        // Чтобы балун и хинт открывались на метке, необходимо задать ей определенные свойства.
        balloonContentHeader: "Mr. Burger",
        balloonContentBody: adress,
        balloonContentFooter: "режим работы: 08:00 - 24:00",
        hintContent: adress}, {
          iconLayout: 'default#image',
        iconImageHref: "./images/8-contacts/marker.png",
        iconImageSize: [46, 57],
        iconImageOffset: [0, -40]
      });
      myMap.geoObjects.add(mark);
    }

    markcall(cords[0], adress[0]);
    markcall(cords[1], adress[1]);
    markcall(cords[2], adress[2]);
    markcall(cords[3], adress[3]);
    myMap.behaviors.disable("scrollZoom");
  }
}
yamaps();