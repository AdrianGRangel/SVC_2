const btnEditar = document.getElementById('btn-editar-perfil');
const btnAbrirPass = document.getElementById('btn-abrir-pass');
const btnGuardar = document.getElementById('btn-guardar-cambios');
const btnCancelar = document.getElementById('btn-cancelar-edicion');
const modalPass = document.getElementById('modal-password');
const inputsPerfil = document.querySelectorAll('#form-perfil input[readonly]');
const inputPerfil = document.querySelectorAll('#form-perfil input');

btnEditar.addEventListener('click', () => {
    inputsPerfil.forEach(input => input.removeAttribute('readonly'));
    btnEditar.style.display = 'none';
    btnAbrirPass.style.display = 'none';
    btnGuardar.style.display = 'inline-block';
    btnCancelar.style.display = 'inline-block';
});

btnCancelar.addEventListener('click', () => {
    location.reload(); 
});

btnAbrirPass.addEventListener('click', () => {
    abrirModalPass();
});

function abrirModalPass() {
    modalPass.style.display = 'flex';
}

function cerrarModalPass() {
    modalPass.style.display = 'none';
}

function simularGuardarPass() {
    const input1 = document.getElementById('nueva-pass');
    const input2 = document.getElementById('confirmar-pass');
    const errorPass = document.getElementById('error-pass');
    const errorConfirmarPass = document.getElementById('error-confirmar-pass');

    if (input1.value === "" || input2.value === "") {
        errorPass.textContent = "Por favor, completa ambos campos.";
        input1.focus();
        errorConfirmarPass.textContent = "";
        return;
    }

    if (input1.value === input2.value) {
        localStorage.setItem('userPassword', input1.value);
        alert("Contraseña actualizada correctamente.");
        cerrarModalPass();
        input1.value = "";
        input2.value = "";
        errorPass.textContent = "";
        errorConfirmarPass.textContent = "";

    } else {
        errorConfirmarPass.textContent = "Las contraseñas no coinciden.";
        input2.focus();
        errorPass.textContent = "";
    }
    }

window.onclick = function(event) {
    if (event.target == modalPass) {
        cerrarModalPass();
    }
}

btnGuardar.addEventListener('click', () => {
    localStorage.setItem('nombre', document.getElementById('nombre').value);
    localStorage.setItem('apellidos', document.getElementById('apellidos').value);
    localStorage.setItem('telefono', document.getElementById('telefono').value);
    localStorage.setItem('correo', document.getElementById('correo').value);
    localStorage.setItem('direccion', document.getElementById('direccion').value);

    inputPerfil.forEach(input => input.setAttribute('readonly', true));
    btnEditar.style.display = 'incline-block';
    btnGuardar.style.display = 'none';
    btnCancelar.style.display = 'none';

    alert('Datos guardados correctamente');
});

btnCancelar.addEventListener('click', () => {
    location.reload();
});

window.onload = () => {
    
ocument.getElementById('nombre').value = localStorage.getItem('nombre') || '';
    document.getElementById('apellidos').value = localStorage.getItem('apellidos') || '';
    document.getElementById('telefono').value = localStorage.getItem('telefono') || '';
    document.getElementById('correo').value = localStorage.getItem('correo') || '';
    document.getElementById('direccion').value = localStorage.getItem('direccion') || '';
};