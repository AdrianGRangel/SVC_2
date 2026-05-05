document.addEventListener("DOMContentLoaded", function () {
  const notificationData = {
    aprobacion: {
      title: "Vehiculo en la banqueta",
      subtitle: "Reporte aprobado",
      status: "Aprobado",
      statusClass: "status-success",
      description:
        "Tu reporte RPT-20260419-1432 de la categoria Vehiculo en la banqueta fue revisado correctamente. La evidencia fue suficiente y el incidente paso a estado cerrado.",
      date: "19 de abril, 2026 - hace 12 minutos",
      category: "Vehiculo en la banqueta",
      action:
        "Se acreditaron 37 puntos a tu saldo y el folio quedo archivado en tu historial.",
      details: [
        "Folio del reporte: RPT-20260419-1432",
        "Credito asignado: 37 puntos",
        "Estado final: cerrado y validado",
        "Siguiente paso: puedes revisar el caso dentro del historial",
      ],
    },
    evidencia: {
      title: "Vehiculo en zona de discapacitados",
      subtitle: "Solicitud de evidencia adicional",
      status: "Seguimiento",
      statusClass: "status-warning",
      description:
        "El equipo detecto que una de las fotografias no muestra con claridad la placa y solicita una imagen adicional para continuar con el proceso.",
      date: "19 de abril, 2026 - hace 1 hora",
      category: "Vehiculo en zona de discapacitados",
      action:
        "Se recomienda subir una nueva fotografia desde tu reporte para evitar que el caso sea pausado.",
      details: [
        "Motivo: evidencia visual insuficiente",
        "Tiempo limite sugerido: 24 horas",
        "Impacto: el reporte no avanza hasta recibir informacion complementaria",
        "Accion recomendada: adjuntar una foto mas clara y revisar la descripcion",
      ],
    },
    recompensa: {
      title: "Vehiculo en la ciclovia",
      subtitle: "Recompensa acreditada",
      status: "Cerrado",
      statusClass: "status-info",
      description:
        "Tu reporte de la categoria Vehiculo en la ciclovia fue cerrado correctamente. Los puntos generados ya impactaron tu saldo y desbloquearon una nueva recompensa.",
      date: "19 de abril, 2026 - 9:40 a. m.",
      category: "Vehiculo en la ciclovia",
      action:
        "Puedes ir a la seccion de recompensas para revisar condiciones, puntos requeridos y disponibilidad.",
      details: [
        "Saldo actual detectado: 3,480 puntos",
        "Nueva opcion activa: tarjeta de regalo de $100",
        "Disponibilidad: inmediata",
        "Accion sugerida: revisar premios disponibles antes de seguir acumulando",
      ],
    },
    recordatorio: {
      title: "Vehiculo abandonado en la calle",
      subtitle: "Seguimiento pendiente",
      status: "En revision",
      statusClass: "status-neutral",
      description:
        "Aun tienes un reporte abierto en la categoria Vehiculo abandonado en la calle. El sistema te recuerda dar seguimiento para no perder continuidad en el proceso.",
      date: "18 de abril, 2026 - 6:15 p. m.",
      category: "Vehiculo abandonado en la calle",
      action:
        "Consulta el historial para revisar los casos abiertos y verificar si alguno necesita una respuesta de tu parte.",
      details: [
        "Reportes abiertos detectados: 3",
        "Casos con seguimiento sugerido: 1",
        "Proximo recordatorio: dentro del ciclo diario",
        "Accion recomendada: entrar a historial y validar estados",
      ],
    },
  };

  bindDetailModal({
    modalId: "notification-modal",
    titleId: "modal-title",
    subtitleId: "modal-subtitle",
    statusId: "modal-status",
    descriptionId: "modal-description",
    dateId: "modal-date",
    categoryId: "modal-category",
    actionId: "modal-action",
    detailsId: "modal-details",
    triggerAttr: "data-notification",
    data: notificationData,
  });
});
