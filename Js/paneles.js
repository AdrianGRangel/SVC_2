document.addEventListener("DOMContentLoaded", function () {
  const correo = localStorage.getItem("correo");
  const welcome = document.getElementById("welcome");
  const pageWelcome = document.getElementById("page-welcome");

  if (welcome) {
    welcome.textContent = correo || "Usuario";
  }

  if (pageWelcome) {
    pageWelcome.textContent = correo ? `Hola, ${correo}` : "Hola, Usuario";
  }
});

function bindDetailModal(config) {
  const modal = document.getElementById(config.modalId);

  if (!modal) {
    return;
  }

  const title = document.getElementById(config.titleId);
  const subtitle = document.getElementById(config.subtitleId);
  const status = document.getElementById(config.statusId);
  const description = document.getElementById(config.descriptionId);
  const date = document.getElementById(config.dateId);
  const category = document.getElementById(config.categoryId);
  const action = document.getElementById(config.actionId);
  const details = document.getElementById(config.detailsId);
  const openButtons = document.querySelectorAll(`[${config.triggerAttr}]`);
  const closeButtons = modal.querySelectorAll("[data-close-modal]");

  function openModal(key) {
    const item = config.data[key];

    if (!item) {
      return;
    }

    title.textContent = item.title;
    subtitle.textContent = item.subtitle;
    status.textContent = item.status;
    status.className = `status-pill ${item.statusClass}`;
    description.textContent = item.description;
    date.textContent = item.date;
    category.textContent = item.category;
    action.textContent = item.action;
    details.innerHTML = item.details
      .map(function (detail) {
        return `<li>${detail}</li>`;
      })
      .join("");

    modal.classList.add("active");
  }

  function closeModal() {
    modal.classList.remove("active");
  }

  openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      openModal(button.getAttribute(config.triggerAttr));
    });
  });

  closeButtons.forEach(function (button) {
    button.addEventListener("click", closeModal);
  });

  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}
