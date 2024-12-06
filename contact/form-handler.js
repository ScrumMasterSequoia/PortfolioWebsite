import { validateForm } from './validation.js';

export function setupForm(formElement) {
  const errorElements = {
    name: document.querySelector('.error-name'),
    email: document.querySelector('.error-email'),
    message: document.querySelector('.error-message')
  };

  function clearErrors() {
    Object.values(errorElements).forEach(element => {
      element.textContent = '';
    });
  }

  function displayErrors(errors) {
    Object.entries(errors).forEach(([field, message]) => {
      errorElements[field].textContent = message;
    });
  }

  formElement.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErrors();

    const formData = {
      name: formElement.name.value,
      email: formElement.email.value,
      message: formElement.message.value
    };

    const errors = validateForm(formData);

    if (Object.keys(errors).length === 0) {
      // Simulate form submission
      alert('Form submitted successfully!');
      formElement.reset();
    } else {
      displayErrors(errors);
    }
  });
}