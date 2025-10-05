// Form Validation
(function () {
  const form = document.querySelector('form');

  if (!form) return; // Exit if no form on page

  // Create error message element
  function createErrorMessage(message) {
    const error = document.createElement('span');
    error.className = 'error-message';
    error.textContent = message;
    return error;
  }

  // Validate email format
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  // Clear all error messages
  function clearErrors() {
    const errors = form.querySelectorAll('.error-message');
    errors.forEach(error => error.remove());

    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => input.classList.remove('error'));
  }

  // Show error for specific field
  function showError(field, message) {
    field.classList.add('error');
    const errorMsg = createErrorMessage(message);
    field.parentNode.appendChild(errorMsg);
  }

  // Validate form
  function validateForm(e) {
    e.preventDefault();
    clearErrors();

    let isValid = true;

    // Get form fields
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validate name
    if (!name.value.trim()) {
      showError(name, 'Please enter your name');
      isValid = false;
    } else if (name.value.trim().length < 2) {
      showError(name, 'Name must be at least 2 characters');
      isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
      showError(email, 'Please enter your email');
      isValid = false;
    } else if (!isValidEmail(email.value.trim())) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, 'Please enter your message');
      isValid = false;
    } else if (message.value.trim().length < 10) {
      showError(message, 'Message must be at least 10 characters');
      isValid = false;
    }

    // If valid, show success message
    if (isValid) {
      // Create success message
      const successMsg = document.createElement('div');
      successMsg.className = 'success-message';
      successMsg.innerHTML = '✓ Thank you! Your message has been sent successfully.';

      // Insert before form
      form.parentNode.insertBefore(successMsg, form);

      // Reset form
      form.reset();

      // Remove success message after 5 seconds
      setTimeout(() => {
        successMsg.remove();
      }, 5000);
    }

    return isValid;
  }

  // Add real-time validation on blur
  const inputs = form.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('blur', function () {
      // Remove error styling when user starts typing
      if (this.classList.contains('error') && this.value.trim()) {
        this.classList.remove('error');
        const errorMsg = this.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
      }
    });

    input.addEventListener('input', function () {
      // Remove error when user types
      if (this.classList.contains('error')) {
        this.classList.remove('error');
        const errorMsg = this.parentNode.querySelector('.error-message');
        if (errorMsg) errorMsg.remove();
      }
    });
  });

  // Attach validation to form submit
  form.addEventListener('submit', validateForm);
})();
