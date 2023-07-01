import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = form.elements.email;
const message = form.elements.message;
const key = 'feedback-form-state';

const saveForm = throttle(() => {
  const feedback = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem(key, JSON.stringify(feedback));
}, 500);

function dataForm() {
  const feedback = JSON.parse(localStorage.getItem(key));
  if (feedback) {
    email.value = feedback.email;
    message.value = feedback.message;
  } else {
    email.value = '';
    message.value = '';
  }
}

dataForm();

form.addEventListener('input', saveForm);

form.addEventListener('submit', event => {
  event.preventDefault();

  localStorage.setItem(
    key,
    JSON.stringify({
      email: '',
      message: '',
    })
  );
  console.log({
    email: email.value,
    message: message.value,
  });
  email.value = '';
  message.value = '';
});
