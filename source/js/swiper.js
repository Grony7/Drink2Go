export const swiperTopProducts= new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper__pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },
  speed: 500,
  // effect: 'fade',
  // fadeEffect: {
  //   crossFade: true,
  // }
});
