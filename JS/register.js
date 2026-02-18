const registrationForm = document.getElementById('registrationForm');


function validateRegister (username, email, password, conPassword, users)
{
    let errors = {}

    if (username.length < 3) errors.username = 'Username must be at least 3 characters';

    if (!email.includes('@') || !email.includes('.')) errors.email = 'Email is invalid';

    else if (users.some(user => user.email === email)) errors.email = 'Email already exists';

    if (password.length < 6) errors.password = 'Password must be at least 6 characters';

    if (password !== conPassword) errors.conPassword = 'Passwords do not match';

    return errors;
}


function addUser (username, email, password)
{
    let users = JSON.parse(localStorage.getItem('users')) || [];

    let newUser = {
        id: Date.now(),
        username,
        email,
        password,
    };

    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));
}


registrationForm.addEventListener ('submit', function (ev)
{
    ev.preventDefault();

    document.querySelectorAll('.error').forEach(el => el.textContent = '');

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();
    const conPassword = document.getElementById('conPassword').value.trim();

    let users = JSON.parse(localStorage.getItem('users')) || [];

    let errors = validateRegister (username, email, password, conPassword, users);

    if (Object.keys(errors).length > 0)
    {
        if (errors.username) document.getElementById('RegUsernameError').textContent = errors.username;
        if(errors.email) document.getElementById('RegEmailError').textContent = errors.email;
        if(errors.password) document.getElementById('RegPasswordError').textContent = errors.password;
        if(errors.conPassword) document.getElementById('RegConPasswordError').textContent = errors.conPassword;
        return;
    }

    addUser(username, email, password);

    registrationForm.reset();

    window.location.href = 'login.html';
});