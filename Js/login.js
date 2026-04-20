

document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('signIn');
    const signUpButton = document.getElementById('signUp');
    const container = document.getElementById('container');
    
    const loginForm = document.querySelector('.sign-in-container form');
    const registerForm = document.querySelector('.sign-up-container form');

    signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
    });

    signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
    });

    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const pass = document.getElementById('reg-pass').value;
        const confirmPass = registerForm.querySelector('input[name="confirm-password"]').value;

        if (pass !== confirmPass) {
            alert("Las contraseñas no coinciden");
            document.getElementById('reg-confirm-pass').focus();
            return;
        }

        localStorage.setItem('nombre', document.getElementById('reg-nombre').value);
        localStorage.setItem('apellidos', document.getElementById('reg-apellidos').value);
        localStorage.setItem('telefono', document.getElementById('reg-telefono').value);
        localStorage.setItem('correo', document.getElementById('reg-correo').value);
        localStorage.setItem('direccion', document.getElementById('reg-direccion').value);
        localStorage.setItem('password', document.getElementById('reg-pass').value);



        localStorage.setItem('usuario', document.getElementById('reg-nombre').value);

        alert('Registro exitoso. Redirigiendo...');
        window.location.href = "index.html";
    });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = loginForm.querySelector('input[type="email"]').value;
        const pass = loginForm.querySelector('input[type="password"]').value;

        const correoGuardado = localStorage.getItem('correo');
        const passGuardada = localStorage.getItem('password');

        if (email === correoGuardado && pass === passGuardada) {
            localStorage.setItem('usuario', localStorage.getItem('nombre'));
            window.location.href = "index.html";
        } else {
            localStorage.setItem('usuario', email.split('@')[0]);
            window.location.href = "index.html";
        }
    });

    document.querySelectorAll('.google-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            localStorage.setItem('usuario', "Usuario Google");
            window.location.href = "index.html";
        });
    });
});