let counterValue = 0;

const onButtonDecrClick = (event) => {
    value.textContent = counterValue -= 1;
}

const onButtonIncrClick = (event) => {
    value.textContent = counterValue += 1;
}

const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
}

refs.decrementBtn.addEventListener('click', onButtonDecrClick);
refs.incrementBtn.addEventListener('click', onButtonIncrClick);