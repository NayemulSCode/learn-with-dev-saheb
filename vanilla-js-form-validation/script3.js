const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('confirm_password');

// show inupt error message
function showError(inputField, message){
    const formControl = inputField.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message
}
// show inupt error message
function showSuccess(inputField){
    const formControl = inputField.parentElement;
    formControl.className = 'form-control success';
}

// field required check
function checkRequired(inputFieldArray){
    let isRequired = false
    inputFieldArray.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input, `${getInputFiledName(input)} is not valid`)
            isRequired = true
        }else{
            showSuccess(input)
        }
    });
    return isRequired;
}
// get input filed name
function getInputFiledName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// checkEmail
function emailCheck(email){
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(reg.test(email.value)){
        showSuccess(email)
    }else{
        showError(email, 'Email is not valid format')
    }
}
//password check
function checkPasswordLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getInputFiledName(input)} must be ${min} characters`)
    }else if(input.value.length > max){
        showError(input, `${getInputFiledName(input)} must be less than ${max} characters`)
    } else if (input.value.search(/^\S*$/)){
        showError(input, `${getInputFiledName(input)} must not contain Whitespaces.`)
    }else if (input.value.search(/^(?=.*[A-Z]).*$/)){
        showError(input, `Your ${getInputFiledName(input)} must be at least one uppercase latter.`)
    } else if (input.value.search(/^(?=.*[a-z]).*$/)) {
        showError(input, `Your ${getInputFiledName(input)} must be at least one lowercases latter.`)
    } else if (input.value.search(/^(?=.*[0-9]).*$/)) {
        showError(input, `Your ${getInputFiledName(input)} must be at least one digit.`)
    } else if (input.value.search(/^(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).*$/)) {
        showError(input, `Your ${getInputFiledName(input)} must contain at least one Special Symbol.`)
    }else{
        showSuccess(input)
    }
}
// match password
function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        showError(input2, `${ getInputFiledName(input1) } and Confirm password does not match.`)

    }
}
// event handler
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if(checkRequired([email, password, password2])){
        emailCheck(email);
        checkPasswordLength(password, 8, 16);
        checkPassword(password, password2);
    }else{
        // console.log("not requred")
    }
});