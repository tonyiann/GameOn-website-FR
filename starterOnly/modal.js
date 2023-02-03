function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.getElementsByClassName('close');

const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const quantity = document.getElementById('quantity');
const birthdate = document.getElementById('birthdate');
const locations = document.querySelectorAll('input[name = "location"]');
const checkbox1 = document.getElementById('checkbox1');
const form = document.getElementById('form');
const regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ]+$/;
const confirmMessage = document.querySelector('.confirm-message')

// EVENT

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal form
function closeModal() { 
  modalbg.style.display = 'none';
  form.style.display = 'block';
  confirmMessage.style.display = 'none'
}
closeBtn[0].addEventListener('click', closeModal);



//verification du nom et prénom
function checkFirstName() {
  if (firstName.value.trim().length < 2 || firstName.value.trim() === '' || !firstName.value.match(regex)) {
      firstName.parentElement.setAttribute('data-error-visible', 'true');
      firstName.style.border = '2px solid #e54858';
      return false;
  }
  firstName.parentElement.setAttribute('data-error-visible', 'false');
  firstName.style.border = 'solid #279e7a 0.19rem';
  return true;
}

function checkLastName() {
  if (lastName.value.trim().length < 2 || lastName.value.trim() === '' || !lastName.value.match(regex)) {
      lastName.parentElement.setAttribute('data-error-visible', 'true');
      lastName.style.border = '2px solid #e54858';
      return false;
  }
  lastName.parentElement.setAttribute('data-error-visible', 'false');
  lastName.style.border = 'solid #279e7a 0.19rem';
  return true;
}

//verification email
  function ValidateEmail() {

  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (email.value.match(validRegex)) {
    email.parentElement.setAttribute('data-error-visible', 'false');
    email.style.border = 'solid #279e7a';
    return true;

  } else {
    email.parentElement.setAttribute('data-error-visible', 'true');
    email.style.border = '2px solid #e54858';
    return false;
  }
}

//verification birthdate
function checkBirthdate() {
  if (birthdate.value.trim().length !== 10) {
      birthdate.parentElement.setAttribute('data-error-visible', 'true');
      birthdate.style.border = '2px solid #e54858';
      return false;
  }
  birthdate.parentElement.setAttribute('data-error-visible', 'false');
  birthdate.style.border = 'solid #279e7a 0.19rem';
  return true;
}
// verification number
function CheckQuantity()
 {
    var numbers = /^[0-9]+$/;
    if (quantity.value.match(numbers))
    {
    quantity.parentElement.setAttribute('data-error-visible', 'false');
    quantity.style.border = 'solid #279e7a 0.19rem';
    return true;
    }
    else
    {
    quantity.parentElement.setAttribute('data-error-visible', 'true');
    firstName.style.border = '2px solid #e54858';
    return false;
    }
 }

// location validation
function validLocation()
{ 
  if(document.querySelector('input[name="location"]:checked') == null) {
    document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'true');
    document.querySelector('input[name="location"]').style.border = '2px solid #e54858';
    return false;
  }
  document.querySelector('input[name="location"]').parentElement.setAttribute('data-error-visible', 'false');
  return true;
}

// CGU validation
function validCheckbox1()
{
  if (checkbox1.checked)
  {
  checkbox1.parentElement.setAttribute('data-error-visible', 'false');
  return true;
  }
  else
  {
    checkbox1.parentElement.setAttribute('data-error-visible', 'true');
    checkbox1.style.border = '2px solid #e54858';
    return false;
  }
}
 
// validation des champs
function verifChamps() {
    checkFirstName() 
    checkLastName() 
    ValidateEmail() 
    checkBirthdate() 
    CheckQuantity() 
    validLocation()
    validCheckbox1()     
  }

// validation form
function validationForm() {
  if
  (checkFirstName()===true && checkLastName()===true && ValidateEmail()===true && checkBirthdate()===true &&
  CheckQuantity()===true && validLocation()===true && validCheckbox1()===true)
  {    
  return true;
  }
  form.parentElement.setAttribute('data-error-visible', 'true');
  return false;
  }

// // form validation//

// 
form.addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("dans le submit")
    if(validationForm()===true){
        form.reset();
        form.style.display ='none';
        document.querySelector('.confirm-message').style.display ='flex';
    }
    else
    {
      console.log("dans le else")
      verifChamps();
    }
})
