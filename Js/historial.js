document.addEventListener("DOMContentLoaded", function () {
  const historyData = {
    banqueta: {
      title: "Vehiculo en la banqueta",
      subtitle: "Reporte actualizado",
      status: "En revision",
      statusClass: "status-info",
      description:
        "El caso sigue abierto y fue actualizado con evidencia complementaria para reforzar la validacion del incidente.",
      date: "19 de abril, 2026 - 2:32 p. m.",
      category: "Vehiculo en la banqueta",
      action:
        "Esperar la revision final del equipo. Si solicitan mas informacion, el sistema te notificara.",
      details: [
        "Folio relacionado: RPT-20260419-1432",
        "Ultimo movimiento: evidencia adicional recibida",
        "Estado actual: en revision",
        "Credito pendiente: se asigna al cierre del caso",
      ],
    },
    abandonado: {
      title: "Vehiculo abandonado en la calle",
      subtitle: "Caso resuelto",
      status: "Resuelto",
      statusClass: "status-success",
      description:
        "El equipo municipal atendio el incidente y el reporte fue cerrado satisfactoriamente dentro del sistema.",
      date: "17 de abril, 2026 - 11:08 a. m.",
      category: "Vehiculo abandonado en la calle",
      action:
        "No se requiere ninguna accion adicional. El caso ya forma parte de tu historial cerrado.",
      details: [
        "Folio relacionado: RPT-20260417-1108",
        "Resultado: incidente atendido",
        "Estado final: resuelto",
        "Impacto: suma al total de reportes concluidos",
      ],
    },
    discapacitados: {
      title: "Vehiculo en zona de discapacitados",
      subtitle: "Seguimiento pendiente",
      status: "Seguimiento",
      statusClass: "status-warning",
      description:
        "El reporte necesita una comprobacion manual adicional antes de poder avanzar a cierre o aprobacion final.",
      date: "15 de abril, 2026 - 5:20 p. m.",
      category: "Vehiculo en zona de discapacitados",
      action:
        "Mantente atento a nuevas notificaciones por si el equipo solicita mas evidencia o una aclaracion.",
      details: [
        "Folio relacionado: RPT-20260415-1720",
        "Motivo del seguimiento: verificacion manual",
        "Estado actual: pendiente de respuesta",
        "Tiempo estimado: sujeto a revision del equipo",
      ],
    },
    ciclovia: {
      title: "Vehiculo en la ciclovia",
      subtitle: "Reporte cerrado",
      status: "Cerrado",
      statusClass: "status-success",
      description:
        "El reporte fue concluido correctamente y los creditos correspondientes ya se reflejan en tu balance.",
      date: "12 de abril, 2026 - 8:54 a. m.",
      category: "Vehiculo en la ciclovia",
      action:
        "Puedes revisar tu saldo en recompensas o continuar generando nuevos reportes.",
      details: [
        "Folio relacionado: RPT-20260412-0854",
        "Resultado: reporte cerrado con exito",
        "Credito asignado: 37 puntos",
        "Impacto: aumento en saldo de recompensas",
      ],
    },
  };

  bindDetailModal({
    modalId: "history-modal",
    titleId: "history-modal-title",
    subtitleId: "history-modal-subtitle",
    statusId: "history-modal-status",
    descriptionId: "history-modal-description",
    dateId: "history-modal-date",
    categoryId: "history-modal-category",
    actionId: "history-modal-action",
    detailsId: "history-modal-details",
    triggerAttr: "data-history",
    data: historyData,
  });
});
