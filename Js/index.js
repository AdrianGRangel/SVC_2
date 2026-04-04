document.addEventListener('DOMContentLoaded', function() {
    const correo = localStorage.getItem('correo');
    if (correo) {
        document.getElementById('welcome-message').textContent = `Welcome, ${correo}!`;
    } else {
        document.getElementById('welcome-message').textContent = 'Welcome, Guest!';
    }
});