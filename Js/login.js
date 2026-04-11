

const signInButton = document.getElementById('signIn');
const signUpButton = document.getElementById('signUp');
const container = document.getElementById('container');
const form = document.querySelector('.sign-in-container form');
const CorreoElectronico = document.querySelector('input[type="email"]');
const registerForm = document.querySelector('.sign-up-container form');
const passwordInput = registerForm.querySelector('input[type="password"]');
const confirmPasswordInput = registerForm.querySelector('input[name="confirm-password"]');

signUpButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', (e) => {
    e.preventDefault();
    container.classList.remove("right-panel-active");
});

function validatePassword() {
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Las contraseñas no coinciden");
    } else {
        confirmPasswordInput.setCustomValidity("");
    }
}

passwordInput.addEventListener('input', validatePassword);
confirmPasswordInput.addEventListener('input', validatePassword);

registerForm.addEventListener('submit', (e) => {
    if(!registerForm.checkValidity()) {
        e.preventDefault();
    } else {
        alert('Registro exitoso');
    }
});

form.addEventListener('submit', function(event) {
    event.preventDefault(); 
    const email = form.querySelector('input[type="email"]').value;
    let correo = email.split('@')[0];
    localStorage.setItem('correo', correo);
    window.location.href = 'index.html';
});

