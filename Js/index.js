document.addEventListener('DOMContentLoaded', function() {
    const correo = localStorage.getItem('correo');
    const display = document.getElementById('welcome-message');
    const display2 = document.getElementById('welcome');

if(correo){
    display2.textContent = `${correo}`;
} else {
    display2.textContent = 'Invitado';
}

if(correo){
    display.textContent = `${correo}, Bienvenido`;
}   else {
    display.textContent = 'Usuario, Bienvenido';
}

});

