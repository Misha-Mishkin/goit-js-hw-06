const refs = {
    form: document.querySelector('.login-form'),
}

refs.form.addEventListener('submit', onFormSubmit)


function onFormSubmit(event) {
    event.preventDefault();

    const {
    elements: { email, password }
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Все поля должны быть заполнены!");
  }

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();

}