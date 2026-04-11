document.addEventListener('DOMContentLoaded', function() {
const correo = localStorage.getItem('correo');
const display = document.getElementById('welcome');
const display2 = document.getElementById('welcome-message');

if(correo){
    display.textContent = `${correo}`;
} else {
    display.textContent = 'Usuario';
}

if(correo){
    display2.textContent = `Bienvenido, ${correo}`;
} else {
    display2.textContent = 'Bienvenido, Usuario';
}
});

document.querySelectorAll('.photo-box input[type="file"]').forEach(input => {
    input.addEventListener('change', function() {
        if (this.files && this.files[0]) {
            const reader = new FileReader();
            const box = this.closest('.photo-box');
            const boxContent = box.querySelector('.box-content');

            reader.onload = function(e) {
                // 1. Ocultamos el icono y el texto original
                boxContent.style.display = 'none';
                
                // 2. Quitamos el borde punteado y ponemos la imagen de fondo
                box.style.border = 'none';
                box.style.backgroundImage = `url(${e.target.result})`;
                box.style.backgroundSize = 'cover';
                box.style.backgroundPosition = 'center';
                
                // 3. Añadimos un pequeño indicador de "Check" para confirmar
                if(!box.querySelector('.success-badge')) {
                    const badge = document.createElement('div');
                    badge.classList.add('success-badge');
                    badge.innerHTML = '✓';
                    box.appendChild(badge);
                }
            }

            reader.readAsDataURL(this.files[0]);
        }
    });
});

// Función para abrir el primer modal al dar clic en "Enviar Reporte"
document.getElementById('enviar-reporte').addEventListener('click', function(e) {
   const formulario = this.closest('form');
   if(formulario.checkValidity()) {
       e.preventDefault();
        document.getElementById('modal-advertencia').style.display = 'flex';
    } else {
        formulario.reportValidity();
    }
    });

function cerrarModal(id) {
    document.getElementById(id).style.display = 'none';
}

function cambiarModal(actual, siguiente) {
    cerrarModal(actual);
    document.getElementById(siguiente).style.display = 'flex';
}