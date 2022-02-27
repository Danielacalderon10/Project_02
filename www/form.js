

// PREFERRED CONTACT
const method = document.querySelector('#method');
method.addEventListener('change', function () {

 let emailStyle = this.value == 'email' ? 'block' : 'none';
  let mobileStyle = this.value == 'mobile' ? 'block' : 'none';
  console.log(emailStyle, mobileStyle)
  document.querySelector('.email-container').style.display = emailStyle;
  document.querySelector('.mobile-container').style.display = mobileStyle;
  document.querySelector('.submit-container').style.display = 'block';

});
// Add modal
const body = document.querySelector('body')
const modal = document.querySelector('#myModal')

// CLOSE MODAL
const closeModalButton =  document.querySelector('#close-modal')
closeModalButton.addEventListener('click', closeModal)


function displayModal() {
  body.classList.add('modal-active')
  modal.classList.remove('hidden')
}

function closeModal() {
  body.classList.remove('modal-active')
  modal.classList.add('hidden')
}

// TODO: Add styles including confirmation

console.log('Connected');

// REGEX VARIABLES
const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/;
const lastnameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/;
const messageRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ \-'.0-9]+$/;
const mobileRegex =
  /^(?:\+?(61))? ?(?:\((?=.*\)))?(0?[2-57-8])\)? ?(\d\d(?:[- ](?=\d{3})|(?!\d\d[- ]?\d[- ]))\d\d[- ]?\d[- ]?\d{3})$/;
const emailRegex =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

// DOM ELEMENTS
const contactForm = document.getElementById('contact-form');
const name = document.getElementById('first-name');
const lastname = document.getElementById('last-name')
const mobile = document.querySelector('#mobile');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const button = document.getElementsByClassName('submit');

// Submit event listener
contactForm.addEventListener('submit', validateForm);

// Remove HTML validation
// Leave required in HTML for failsafe
contactForm.setAttribute('novalidate', true);

function validateForm(e) {
  e.preventDefault();
  if (
    (isValid(name, nameRegex) && isValid(lastname, lastnameRegex) && isValid(message, messageRegex))  &&  (isValid(email, emailRegex) ||
    isValid(mobile, mobileRegex))
  ) {
    displayModal()
    console.log('VALID');
    console.log(
      `name: ${name.value},\n Last name: ${lastname.value}, \n mobile: ${mobile.value}, \n email: ${email.value}, \n message: ${message.value}`
    );
  } else {
    console.log('INVALID');
    console.log(
      `name: ${name.value},\n Last name: ${lastname.value}, \n mobile: ${mobile.value}, \n email: ${email.value}, \n message: ${message.value}`
    );
  }
}
function isValid(element, regex) {
  return regex.test(element.value); 
}
