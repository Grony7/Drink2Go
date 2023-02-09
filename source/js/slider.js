const slider = document.querySelector('.price__slider');

noUiSlider.create(slider, {
  range: {
    min: 0,
    max: 1000,
  },
  cssPrefix: 'slider__',
  start: [0, 900],
  connect: true,
  step: 1,
  format: {
    to: (value) => value.toFixed(0),
    from: (value) => value,
  }
});
