/*
Steps->
1. set event listener to the submit button
2. get the email from the email input field
3. get the password from the password input field
4. verify the email and password ->!!! We must not do it in the client side !!!
*/

// step-1
document.getElementById('submit-btn').addEventListener('click', function () {
    //step-2
    const emailInputField = document.getElementById('email-field');
    const email = emailInputField.value;

    //step-3
    const passwordInputField = document.getElementById('password-field');
    const password = passwordInputField.value;

    // step-4
    if(email === 'karim@gmail.com' && password === 'secret'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Enter Valid Email and/or Password !!!');
    }
})