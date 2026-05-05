document.addEventListener("DOMContentLoaded", function () {
  const usuario = Usuario.cargar();
  const display = document.getElementById("welcome");
  const display2 = document.getElementById("welcome-message");

  if (usuario && usuario.correo) {
    display.textContent =
      usuario.nombre !== "" ? usuario.nombre : usuario.correo;
    display2.textContent = `Bienvenido, ${usuario.nombre !== "" ? usuario.nombre : usuario.correo}`;
  } else {
    display.textContent = "Usuario";
    display2.textContent = "Bienvenido, Usuario";
  }
});
