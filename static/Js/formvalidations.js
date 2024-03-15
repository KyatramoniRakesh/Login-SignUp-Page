function validateForm() {
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();
    var confirmPassword = document.getElementById('confirmPassword').value.trim();
    var age = document.getElementById('age').value.trim();
    var dob = document.getElementById('dob').value.trim();

    if (name === '') {
        setError(document.getElementById('name'), 'Name is required');
        return false;
    } else {
        setSuccess(document.getElementById('name'));
    }

    if (email === '') {
        setError(document.getElementById('email'), 'Email is required');
        return false;
    } else if (!isValidEmail(email)) {
        setError(document.getElementById('email'), 'Please enter a valid email address');
        return false;
    } else {
        setSuccess(document.getElementById('email'));
    }

    if (password === '') {
        setError(document.getElementById('password'), 'Password is required');
        return false;
    } else if (password.length < 6) {
        setError(document.getElementById('password'), 'Password must be at least 6 characters');
        return false;
    } else {
        setSuccess(document.getElementById('password'));
    }

    if (confirmPassword === '') {
        setError(document.getElementById('confirmPassword'), 'Please confirm password');
        return false;
    } else if (password !== confirmPassword) {
        setError(document.getElementById('confirmPassword'), 'Passwords do not match');
        return false;
    } else {
        setSuccess(document.getElementById('confirmPassword'));
    }

    if (age === '') {
        setError(document.getElementById('age'), 'Age is required');
        return false;
    } else if (isNaN(age)) {
        setError(document.getElementById('age'), 'Please enter a valid age');
        return false;
    } else {
        setSuccess(document.getElementById('age'));
    }


    return true;
}

function setError(input, message) {
    var formControl = input.parentElement;
    var small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccess(input) {
    var formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isValidEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

