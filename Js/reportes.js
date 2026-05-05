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

document.querySelectorAll('.photo-box input[type="file"]').forEach((input) => {
  input.addEventListener("change", function () {
    if (this.files && this.files[0]) {
      const reader = new FileReader();
      const box = this.closest(".photo-box");
      const boxContent = box.querySelector(".box-content");

      reader.onload = function (e) {
        boxContent.style.display = "none";

        box.style.border = "none";
        box.style.backgroundImage = `url(${e.target.result})`;
        box.style.backgroundSize = "cover";
        box.style.backgroundPosition = "center";

        if (!box.querySelector(".success-badge")) {
          const badge = document.createElement("div");
          badge.classList.add("success-badge");
          badge.innerHTML = "✓";
          box.appendChild(badge);
        }
      };

      reader.readAsDataURL(this.files[0]);
    }
  });
});

// Función para abrir el primer modal al dar clic en "Enviar Reporte"
document
  .getElementById("enviar-reporte")
  .addEventListener("click", function (e) {
    const formulario = this.closest("form");
    if (formulario.checkValidity()) {
      e.preventDefault();
      document.getElementById("modal-advertencia").style.display = "flex";
    } else {
      formulario.reportValidity();
    }
  });

function cerrarModal(id) {
  document.getElementById(id).style.display = "none";
}

function cambiarModal(actual, siguiente) {
  cerrarModal(actual);
  if (siguiente === "modal-exito") {
    mostrarExito();
  }
  document.getElementById(siguiente).style.display = "flex";
}

function generarFolio() {
  const ahora = new Date();
  const fecha =
    ahora.getFullYear() +
    "" +
    String(ahora.getMonth() + 1).padStart(2, "0") +
    "" +
    String(ahora.getDate()).padStart(2, "0");
  const hora =
    String(ahora.getHours()).padStart(2, "0") +
    "" +
    String(ahora.getMinutes()).padStart(2, "0") +
    "" +
    String(ahora.getSeconds()).padStart(2, "0");
  const random = Math.floor(1000 + Math.random() * 9000);
  return `RPT-${fecha}${hora}-${random}-UES`;
}

function mostrarExito() {
  const folio = generarFolio();
  const elementoFolio = document.getElementById("folio-numero");
  elementoFolio.innerHTML = `<strong>${folio}</strong>`;
  const btncopy = document.querySelector(".copy-btn");
  btncopy.onclick = function () {
    copiarFolio(folio);
  };
}

function copiarFolio(folio) {
  navigator.clipboard.writeText(folio).then(
    function () {
      alert("Folio copiado al portapapeles: " + folio);
    },
    function (err) {
      alert("Error al copiar el folio: ", err);
    },
  );
}
