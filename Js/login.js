document.addEventListener("DOMContentLoaded", () => {
  const signInButton = document.getElementById("signIn");
  const signUpButton = document.getElementById("signUp");
  const container = document.getElementById("container");

  signUpButton.addEventListener("click", () => {
    container.classList.add("right-panel-active");
  });

  signInButton.addEventListener("click", () => {
    container.classList.remove("right-panel-active");
  });
});

// registro
const registerForm = document.getElementById("registerForm");
registerForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const pass = document.getElementById("reg-pass").value;
  const confirmPass = document.getElementById("reg-confirmar-pass").value;

  if (pass !== confirmPass) {
    alert("Las contraseñas no coinciden");
    return;
  }

  const usuario = new Usuario(
    document.getElementById("reg-nombre").value,
    document.getElementById("reg-apellidos").value,
    document.getElementById("reg-telefono").value,
    document.getElementById("reg-correo").value,
    document.getElementById("reg-direccion").value,
  );
  usuario.guardar();
  alert("Registro exitoso");
  window.location.href = "index.html";
});

// login
const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("login-email").value;
  const pass = document.getElementById("login-pass").value;

  if (email && pass) {
    const usuario = new Usuario("", "", "", email, "");
    usuario.guardar();
    alert("Inicio de sesión exitoso");
    window.location.href = "index.html";
  } else {
    alert("Por favor, completa todos los campos");
  }
});

// GOOGLE LOGIN
document.getElementById("btn-google-login").addEventListener("click", () => {
  const usuario = new Usuario("", "", "", "usuario.google@example.com", "");
  usuario.guardar();
  window.location.href = "index.html";
});

document.getElementById("btn-google-register").addEventListener("click", () => {
  const usuario = new Usuario("", "", "", "usuario.google@example.com", "");
  usuario.guardar();
  window.location.href = "index.html";
});

function registrarUsuario() {
  const nombre = document.getElementById("nombre").value;
  const apellidos = document.getElementById("apellidos").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;

  const usuario = new Usuario(nombre, apellidos, telefono, correo, direccion);
  usuario.guardar();

  window.location.href = "index.html";
}
