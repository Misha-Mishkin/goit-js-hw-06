const refs = {
    inputEl: document.querySelector('input'),
}

refs.inputEl.addEventListener('blur', onInputValidation)


function onInputValidation(event) {
  const valueLength = event.currentTarget.value.length;
  const requiredLength = Number(event.currentTarget.dataset.length);

  this.classList.add('invalid');
  this.classList.remove('valid');

  if (valueLength === requiredLength) {
    this.classList.add('valid');
    this.classList.remove('invalid');
  }
}