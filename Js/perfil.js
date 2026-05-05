// Cargar datos al abrir perfil
window.onload = function () {
  const usuario = Usuario.cargar();
  if (usuario) {
    document.getElementById("nombre").value = usuario.nombre;
    document.getElementById("apellidos").value = usuario.apellidos;
    document.getElementById("telefono").value = usuario.telefono;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("direccion").value = usuario.direccion;
  }
};

document.addEventListener("DOMContentLoaded", function () {
  const usuario = Usuario.cargar();
  const display = document.getElementById("welcome");
  const usuarioTexto = document.getElementById("usuariotexto");
  const correoTexto = document.getElementById("correotexto");

  if (usuario && usuario.correo) {
    display.textContent =
      usuario.nombre !== "" ? usuario.nombre : usuario.correo;
    usuarioTexto.textContent =
      usuario.nombre !== "" ? usuario.nombre : usuario.correo;
    correoTexto.textContent = usuario.correo;
  } else {
    display.textContent = "Usuario";
    usuarioTexto.textContent = "Usuario";
    correoTexto.textContent = "correo";
  }
});

const btnEditar = document.getElementById("btn-editar-perfil");
const btnAbrirPass = document.getElementById("btn-abrir-pass");
const btnGuardar = document.getElementById("btn-guardar-cambios");
const btnCancelar = document.getElementById("btn-cancelar-edicion");
const modalPass = document.getElementById("modal-password");
const inputsPerfil = document.querySelectorAll("#form-perfil input");

btnEditar.addEventListener("click", () => {
  inputsPerfil.forEach((input) => input.removeAttribute("readonly"));
  btnEditar.style.display = "none";
  btnAbrirPass.style.display = "none";
  btnGuardar.style.display = "inline-block";
  btnCancelar.style.display = "inline-block";
});

btnGuardar.addEventListener("click", () => {
  const usuario = new Usuario(
    document.getElementById("nombre").value,
    document.getElementById("apellidos").value,
    document.getElementById("telefono").value,
    document.getElementById("correo").value,
    document.getElementById("direccion").value,
  );
  usuario.guardar();

  inputsPerfil.forEach((input) => input.setAttribute("readonly", true));
  btnEditar.style.display = "inline-block";
  btnAbrirPass.style.display = "inline-block";
  btnGuardar.style.display = "none";
  btnCancelar.style.display = "none";

  alert("Datos guardados correctamente");
});

btnCancelar.addEventListener("click", () => {
  location.reload();
});

btnAbrirPass.addEventListener("click", () => {
  modalPass.style.display = "flex";
});

function cerrarModalPass() {
  modalPass.style.display = "none";
}

function simularGuardarPass() {
  const input1 = document.getElementById("nueva-pass");
  const input2 = document.getElementById("confirmar-pass");
  const errorPass = document.getElementById("error-pass");
  const errorConfirmarPass = document.getElementById("error-confirmar-pass");

  if (input1.value === "" || input2.value === "") {
    errorPass.textContent = "Por favor, completa ambos campos.";
    input1.focus();
    errorConfirmarPass.textContent = "";
    return;
  }

  if (input1.value === input2.value) {
    localStorage.setItem("userPassword", input1.value);
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

window.onclick = function (event) {
  if (event.target == modalPass) {
    cerrarModalPass();
  }
};
