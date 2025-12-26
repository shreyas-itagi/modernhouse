const loader = document.getElementById('.loader');

// select inputs 
const submitBtn = document.getElementById('.submit-btn');
const name = document.getElementById('#name') || null;
const email = document.getElementById('#email');
const password = document.getElementById('#password');
const number = document.getElementById('#number') || null;
const tac = document.getElementById('#terms-and-cond') || null;

function validateform() {
    if(name == null){   
        alert('name can\'t be empty') 
    } else if(name.value.length < 3){
        alert('name must be 3 letters long');
    } else if(!email.value.length){
        alert('enter your email');
    } else if(password.value.length < 8){
        alert('password should be 8 letters long');
    } else if(!number.value.length){
        alert('enter your phone number');
    } else if(!Number(number.value) || number.value.length < 10){
        alert('invalid number, please enter valid one');
    } else if(!tac.checked){
        alert('you must agree to our terms and conditions');
    } else{
        // submit form
        alert("User Registered Successfully!!!");
    }
    }