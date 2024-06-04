// Get form elements
const form = document.querySelector('form');
const firstName = document.getElementById('First-name');
const lastName = document.getElementById('Last-name');
const email = document.getElementById('Email');
const password = document.getElementById('Password');
const confirmPassword = document.getElementById('Confirm-password');

// Add event listeners to form fields
firstName.addEventListener('focusout', function() {
  if (firstName.value.trim() === '') {
    alert('First name is required');
    firstName.focus();
  }
});

lastName.addEventListener('focusout', function() {
  if (lastName.value.trim() === '') {
    alert('Last name is required');
    lastName.focus();
  }
});

email.addEventListener('focusout', function() {
  if (email.value.trim() === '') {
    alert('Email is required');
    email.focus();
  }
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert('Please enter a valid email address');
    email.focus();
  }
});

password.addEventListener('focusout', function() {
  if (password.value.trim() === '') {
    alert('Password is required');
    password.focus();
  }
  if (password.value.length < 8) {
    alert('Password must be at least 8 characters long');
    password.focus();
  }
});

confirmPassword.addEventListener('focusout', function() {
  if (confirmPassword.value.trim() === '') {
    alert('Confirm password is required');
    confirmPassword.focus();
  }
  if (password.value!== confirmPassword.value) {
    alert('Passwords do not match');
    confirmPassword.focus();
  }
});