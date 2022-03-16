const form = document.querySelector('.ad-form');
const roomField = form.querySelector('#room_number');
const capacityField = form.querySelector('#capacity');
const titleField = form.querySelector('#title');
const priceField = form.querySelector('#price');
titleField.removeAttribute('required');
titleField.removeAttribute('minlength');
titleField.removeAttribute('maxlength');
priceField.removeAttribute('required');
priceField.removeAttribute('max');


const roomParameter = {
  '1': ['1'],
  '2': ['1', '2'],
  '3': ['1','2','3'],
  '0': ['0']
};

const pristine = new Pristine(form, {
  classTo: 'ad-form__element',
  errorClass: 'ad-form__element--invalid',
  successClass: 'ad-form__element--valid',
  errorTextParent: 'ad-form__element',
  errorTextTag: 'span',
  errorTextClass: 'ad-form__error'
});

function validateTitle(value) {
  return value.length >= 30 && value.length <= 100;
}

function validatePrice(value) {
  return parseInt(value, 10) <= 100000;
}

function validateCapacity() {
  return roomParameter[roomField.value].includes(capacityField.value);
}

pristine.addValidator(titleField, validateTitle, 'От 30 до 100 символов');
pristine.addValidator(priceField, validatePrice, 'Максимальное значение 100 000');
pristine.addValidator(capacityField, validateCapacity, 'Количество гостей несоотвествует количеству комнат');
pristine.addValidator(roomField, validateCapacity, 'Количество комнат несоотвествует количеству гостей');

form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
