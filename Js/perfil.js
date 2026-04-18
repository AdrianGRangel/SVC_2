const form = document.getElementById('form-perfil');
const inputs = form.querySelectorAll('input');
const btnEditar = document.getElementById('btn-editar');
const btnGuardar = document.getElementById('btn-guardar');
const btnPass = document.getElementById('btn-pass');
const seccionPass = document.getElementById('seccion-password');

window.onload = () => {
    inputs.forEach(input => {
        const valorGuardado = localStorage.getItem(input.id);
        if (valorGuardado) {
            input.value = valorGuardado;
            if(input.id === 'nombre') document.getElementById('display-usuario').innerText = valorGuardado;
            if(input.id === 'correo') document.getElementById('display-correo').innerText = valorGuardado;
        }
    });
};


btnEditar.addEventListener('click', () => {
    inputs.forEach(input => input.removeAttribute('readonly'));
    btnEditar.style.display = 'none';
    btnGuardar.style.display = 'block';
    btnPass.style.display = 'block';
    seccionPass.style.display = 'block';
    inputs[0].focus();
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const p1 = document.getElementById('pass1').value;
    const p2 = document.getElementById('pass2').value;

    if (p1 !== "" || p2 !== "") {
        if (p1 !== p2) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        localStorage.setItem('password', p1);
    }


    inputs.forEach(input => {
        if(input.id !== 'pass1' && input.id !== 'pass2') {
            localStorage.setItem(input.id, input.value);
        }
    });

    alert("Información actualizada correctamente.");
    location.reload();
});