function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  inputEl: document.querySelector('#controls > input'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy'),
  divBox: document.querySelector('#boxes'),
}

refs.btnCreate.addEventListener('click', onCreateData);

function onCreateData() {
createBoxes(refs.inputEl.value);
}

refs.btnDestroy.addEventListener('click', onDestroyBoxes);

function createBoxes(amount) {
  let string = '';
  for (let i = 0; i < amount; i++) {
    string += createBox(i);
  }
  refs.divBox.innerHTML = string;
}

function createBox(ratio) {
  return `<div style="background-color: ${getRandomHexColor()}; 
  height: ${30 + 10 * ratio}px; 
  width: ${30 + 10 * ratio}px"></div>`;
}

function onDestroyBoxes() {
  refs.divBox.innerHTML = '';
  refs.inputEl.value = '';
}



