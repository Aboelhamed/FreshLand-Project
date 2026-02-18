const loginForm = document.getElementById('loginForm');


function validateLogin (email, password)
{
    let errors = {};

    if (!email.includes('@') || !email.includes('.')) errors.email = 'Email is invalid';

    if (password.length < 6) errors.password = 'Password must be at least 6 characters';

    return errors;
}


function findUser (email, password)
{
    let users = JSON.parse(localStorage.getItem('users')) || [];

    return users.find(user => user.email === email && user.password === password);
}


loginForm.addEventListener ('submit', function (ev)
{
    ev.preventDefault();

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    let errors = validateLogin(email, password);

    if (Object.keys(errors).length > 0)
    {
        if (errors.email) document.getElementById('logEmailError').textContent = errors.email;
        if (errors.password) document.getElementById('logPasswordError').textContent = errors.password;
        return;
    }

    let user = findUser(email, password);

    if (!user)
    {
        document.getElementById('logPasswordError').textContent = 'Invalid email or password';
        return;
    }

    localStorage.setItem('currentUser', JSON.stringify(user));

    loginForm.reset();

    window.location.href = '../../index.html';
});