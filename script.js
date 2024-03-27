let nameError = document.getElementById("name-error");
let phoneError = document.getElementById("phone-error");
let mailError = document.getElementById("mail-error");
let messageError = document.getElementById("message-error");
let submitError = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("contact-name").value;

    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Write full name';
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("contact-phone").value;

    if(phone.length == 0){
        phoneError.innerHTML = 'Phone no. is required'; 
        return false;
    }
    if(phone.length !== 10){
        phoneError.innerHTML = 'Must be of 10 numbers';
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneError.innerHTML = 'Only digits';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMail(){
    let mail = document.getElementById("contact-mail").value;

    if(mail.length == 0){
        mailError.innerHTML = 'Mail is required';
        return false;
    }
    if(!mail.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        mailError.innerHTML = 'mail is invalid';
        return false;
    }
    mailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById("contact-message").value;
    let required = 30;
    let left = required - message.length;

    if(message.length == 0){
        messageError.innerHTML = 'message is required';
        return false;
    }
    if(left > 0){
        messageError.innerHTML = 'atleast ' + left + ' more characters required';
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateMail() || !validateMessage()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Pleae fix the errors to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 4000);
        return false;
    }
}