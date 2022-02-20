const refs = {
    inputName: document.querySelector('#name-input'),
    outputName: document.querySelector('#name-output'),
}

refs.inputName.addEventListener('input', onInputName);


function onInputName(event) {
    if (event.currentTarget.value === "") {
    return refs.outputName.textContent = "Anonymous";
  }
   return refs.outputName.textContent = event.currentTarget.value;
}



