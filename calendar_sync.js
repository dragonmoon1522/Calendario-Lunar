function importarEventosLunares() {
  var calendarId = CONFIG.CALENDAR_ID; 
  var calendar = CalendarApp.getCalendarById(calendarId);

  // 📂 Leer archivos JSON desde Google Drive
  var folder = DriveApp.getFoldersByName("Calendario Lunar").next();
  var eventosFile = folder.getFilesByName("eventos.json").next();
  var descripcionesFile = folder.getFilesByName("descripciones.json").next();

  var eventos = JSON.parse(eventosFile.getBlob().getDataAsString());
  var descripciones = JSON.parse(descripcionesFile.getBlob().getDataAsString());

  // 🔄 PASO 1: Eliminar eventos existentes con retraso para evitar bloqueos
  var allEvents = calendar.getEvents(new Date("2025-01-01"), new Date("2026-01-01"));
  allEvents.forEach((event, index) => {
    event.deleteEvent();
    if (index % 10 === 0) Utilities.sleep(3000);
  });
  Logger.log("🗑️ Todos los eventos han sido eliminados con retrasos.");

  // 🔄 PASO 2: Filtrar solo los objetos con description_id y descripciones, ignorando comentarios
  var descripcionesValidas = descripciones.descriptions.filter(desc => desc.description_id !== undefined && desc.descripciones);

  // 🔄 PASO 3: Crear eventos con escritura progresiva
  eventos.events.forEach(function(evento, index) {
    var fechaInicio = new Date(evento.date + "T" + (evento.start_time || evento.time) + "Z");

    // ⏳ Calcular la fecha de finalización basada en el evento siguiente
    var fechaFin = evento.end_time
      ? new Date(evento.date + "T" + evento.end_time + "Z")
      : (index < eventos.events.length - 1
        ? new Date(eventos.events[index + 1].date + "T" + (eventos.events[index + 1].start_time || eventos.events[index + 1].time) + "Z")
        : new Date(fechaInicio.getTime() + (24 * 60 * 60 * 1000))); // Si es el último evento, dura 24h

    // Verificación de tiempos correctos
    if (fechaFin <= fechaInicio) {
      Logger.log("⚠️ Error: La fecha de fin es menor o igual a la fecha de inicio para: " + evento.title);
      return;
    }

    // 📝 Buscar descripciones aleatorias según el description_id
    var descripcionesDisponibles = descripcionesValidas.filter(desc => desc.description_id === evento.description_id);
    var descripcionSeleccionada = descripcionesDisponibles.length > 0
      ? descripcionesDisponibles[Math.floor(Math.random() * descripcionesDisponibles.length)].descripciones
      : "⚠️ Información no disponible para este evento.";

    // 📌 Formatear texto para Google Calendar sin Markdown
    var textoDescripcion = evento.title.toUpperCase() + "\n\n" + descripcionSeleccionada;

    // 📅 Crear evento en Google Calendar
    var newEvent = calendar.createEvent(evento.title, fechaInicio, fechaFin, { description: textoDescripcion });

    // 🆔 Guardar UID en eventos.json
    evento.uid = newEvent.getId();
    Logger.log("🆕 Evento agregado: " + evento.title);

    // 💾 Guardar progreso cada 10 eventos y hacer backup antes de modificar eventos.json
    if (index % 10 === 0 || index === eventos.events.length - 1) {
      hacerBackupEventosJSON(folder);
      actualizarEventosJSON(folder, eventos);
    }

    // 🔴 Retraso para evitar bloqueos de Google
    if (index % 10 === 0) Utilities.sleep(3000);
  });

  Logger.log("🎉 Sincronización completada.");
}

// 📂 Función para hacer backup de eventos.json antes de modificarlo
function hacerBackupEventosJSON(folder) {
  var archivos = folder.getFilesByName("eventos.json");
  if (archivos.hasNext()) {
    var archivoOriginal = archivos.next();
    var backupFile = folder.getFilesByName("eventos_backup.json");

    // 🗑️ Si ya existe un backup, lo reemplaza
    if (backupFile.hasNext()) {
      backupFile.next().setTrashed(true);
    }

    folder.createFile("eventos_backup.json", archivoOriginal.getBlob().getDataAsString());
    Logger.log("📂 Backup creado: eventos_backup.json");
  }
}

// 📂 Función para actualizar eventos.json con el progreso
function actualizarEventosJSON(folder, eventos) {
  // 🗑️ Elimina el archivo existente
  var archivos = folder.getFilesByName("eventos.json");
  while (archivos.hasNext()) {
    archivos.next().setTrashed(true);
  }
  
  // 💾 Crea un nuevo archivo con los datos actualizados
  folder.createFile("eventos.json", JSON.stringify(eventos, null, 2));
  Logger.log("✅ eventos.json actualizado con progreso.");
}
