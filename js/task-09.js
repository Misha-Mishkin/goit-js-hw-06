function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const refs = {
  buttonEl: document.querySelector('.change-color'),
  bodyEl: document.querySelector('body'),
  spanColorEl: document.querySelector('.color'),
}

refs.buttonEl.addEventListener('click', onButtonChangeColor)

function onButtonChangeColor() {
  refs.bodyEl.style.backgroundColor = getRandomHexColor();
  refs.spanColorEl.textContent = refs.bodyEl.style.backgroundColor;
}
