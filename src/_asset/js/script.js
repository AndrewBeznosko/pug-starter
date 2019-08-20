$(document).ready(function() {
  $(".imageSlider").lightSlider({
      item: 1,
      slideMargin: 0,
      addClass: '',
      mode: "slide", //fade
      useCSS: true,
      cssEasing: 'ease', //'cubic-bezier(0.25, 0, 0.25, 1)',//
      easing: 'linear', //'for jquery animation',////
      speed: 400, //ms'
      auto: true,
      loop: true,
      pager: false,
      pause: 3500,
      keyPress: true,
      controls: true,
      prevHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 28C21.7156 28 28 21.7156 28 14C28 6.28444 21.7156 -1.35795e-06 14 -6.8343e-07C6.28444 -8.9145e-09 -3.80578e-06 6.28445 -3.13127e-06 14C-2.45675e-06 21.7156 6.28444 28 14 28ZM15.8044 7.40444L17.7956 9.39555L13.1911 14L17.7956 18.6044L15.8044 20.5956L9.20889 14L15.8044 7.40444Z" fill="#DBDBDB"></svg>',
      nextHtml: '<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none"><path d="M14 28C21.7156 28 28 21.7156 28 14C28 6.28444 21.7156 -1.35795e-06 14 -6.8343e-07C6.28444 -8.9145e-09 -3.80578e-06 6.28445 -3.13127e-06 14C-2.45675e-06 21.7156 6.28444 28 14 28ZM15.8044 7.40444L17.7956 9.39555L13.1911 14L17.7956 18.6044L15.8044 20.5956L9.20889 14L15.8044 7.40444Z" fill="#DBDBDB"></svg>',
      enableTouch: true,
      enableDrag: true,
      freeMove: true,
      responsive: [],
});
