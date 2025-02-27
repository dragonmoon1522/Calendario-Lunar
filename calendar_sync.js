
function importarEventosLunares() {
  var CALENDAR_ID = PropertiesService.getScriptProperties().getProperty("CALENDAR_ID");
 
  var calendar = CalendarApp.getCalendarById(CALENDAR_ID);

  // 📂 Leer archivos JSON desde GitHub en lugar de Google Drive
  var eventosUrl = "https://raw.githubusercontent.com/dragonmoon1522/calendario-lunar/main/eventos.json";
  var descripcionesUrl = "https://raw.githubusercontent.com/dragonmoon1522/calendario-lunar/main/descripciones.json";

  var eventos = JSON.parse(UrlFetchApp.fetch(eventosUrl).getContentText());
  var descripciones = JSON.parse(UrlFetchApp.fetch(descripcionesUrl).getContentText());

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
      hacerBackupEventosJSON();
      actualizarEventosJSON(eventos);
    }

    // 🔴 Retraso para evitar bloqueos de Google
    if (index % 10 === 0) Utilities.sleep(3000);
  });

  Logger.log("🎉 Sincronización completada.");
}

var GITHUB_TOKEN = PropertiesService.getScriptProperties().getProperty("GITHUB_TOKEN");

// 📂 Función para hacer backup de eventos.json en GitHub usando Gist API
function hacerBackupEventosJSON() {  
var GIST_BACKUP_URL = PropertiesService.getScriptProperties().getProperty("GITHUB_GIST_BACKUP_URL");
  
  var eventosUrl = "https://raw.githubusercontent.com/dragonmoon1522/calendario-lunar/main/eventos.json";
  var eventos = UrlFetchApp.fetch(eventosUrl).getContentText();

  var options = {
    "method": "PATCH",
    "headers": {
      "Authorization": "token " + GITHUB_TOKEN,
      "Accept": "application/vnd.github.v3+json"
    },
    "contentType": "application/json",
    "payload": JSON.stringify({
      "files": {
        "eventos_backup.json": { "content": eventos }
      }
    })
  };

  var response = UrlFetchApp.fetch(GIST_BACKUP_URL, options);
  Logger.log("📂 Backup subido a GitHub Gist: " + response.getContentText());
}

// 📂 Función para actualizar eventos.json en GitHub
function actualizarEventosJSON(eventos) {
  var updateUrl = "https://api.github.com/repos/dragonmoon1522/calendario-lunar/contents/eventos.json";
  
  var currentFile = UrlFetchApp.fetch(updateUrl, {
    "headers": {
      "Authorization": "token " + GITHUB_TOKEN,
      "Accept": "application/vnd.github.v3+json"
    }
  });
  
  var fileData = JSON.parse(currentFile.getContentText());
  var sha = fileData.sha;

  var options = {
    "method": "put",
    "headers": {
      "Authorization": "token " + GITHUB_TOKEN,
      "Accept": "application/vnd.github.v3+json"
    },
    "contentType": "application/json",
    "payload": JSON.stringify({
      "message": "Actualización automática de eventos.json",
      "content": Utilities.base64Encode(JSON.stringify(eventos, null, 2)),
      "sha": sha
    })
  };

  var response = UrlFetchApp.fetch(updateUrl, options);
  Logger.log("✅ eventos.json actualizado en GitHub: " + response.getContentText());
}
