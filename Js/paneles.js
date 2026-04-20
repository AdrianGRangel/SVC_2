document.addEventListener('DOMContentLoaded', function () {
    const correo = localStorage.getItem('correo');
    const welcome = document.getElementById('welcome');
    const pageWelcome = document.getElementById('page-welcome');

    if (welcome) {
        welcome.textContent = correo || 'Usuario';
    }

    if (pageWelcome) {
        pageWelcome.textContent = correo ? `Hola, ${correo}` : 'Hola, Usuario';
    }
});
