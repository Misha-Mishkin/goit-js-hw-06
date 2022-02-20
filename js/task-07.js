const refs = {
    inputEl: document.querySelector('#font-size-control'),
    textEl: document.querySelector('#text'),
}

refs.inputEl.addEventListener('change', onTextFontSize)

function onTextFontSize() {
    refs.textEl.style.fontSize = `${event.currentTarget.value}px`;
}
