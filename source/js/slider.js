const slider = document.querySelector('.price__slider');

const buttonReset = document.querySelector('.catalog__button--reset');
const fieldMin = document.querySelector('.price__input--min');
const fieldMax = document.querySelector('.price__input--max');
const fieldsList = [fieldMin, fieldMax];

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

slider.noUiSlider.on('slide', (values, handle) => {
  fieldsList[handle].value = values[handle];
});

const setRangeSlider = (index, value) => {
  const arr = [null, null];
  arr[index] = value;
  slider.noUiSlider.set(arr);
}

fieldsList.forEach((element, index) => {
  element.addEventListener('input', (element) => {
    setRangeSlider(index, element.currentTarget.value)
  })
})

buttonReset.addEventListener('click', () => {
  slider.noUiSlider.reset();
});
