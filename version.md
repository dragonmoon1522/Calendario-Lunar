## 📌 Historial de Versiones Calendario Lunar y Espiritual Femenino 🌕✨  

📅 **Última actualización:** 2025-02-26  
✍️ **Autor:** Katherine Vargas [(KathWare)](https://kathware.com.ar)  

---

### 🚀 **Versión 1.0.1 2025-02-26**  
🔹 **Automatización de eventos en Google Calendar**  
   🆑 Se eliminan automáticamente los eventos viejos y se agregan los nuevos.  
   🌍 Ahora se crean eventos con fechas y horas basadas en UTC para adaptarse a cualquier zona horaria.   

🔹 **Fuente de datos centralizada en GitHub**  
   📝 El calendario ahora obtiene eventos desde un **JSON en GitHub** en lugar de Google Drive.  
   🖥 También las descripciones se leen desde un **descripciones.json** en GitHub.  

🔹 **Sistema de backups automático**  
   🔄 Antes de modificar eventos, el script genera un **backup de eventos.json** en un **Gist privado de GitHub**.  
   ⚠ Esto asegura que no se pierdan datos en caso de errores.  

🔹 **Actualización dinámica de eventos.json**  
   📆 Se actualizan los **UIDs** de los eventos después de crearlos en Google Calendar.  
   ⏱ La sincronización con GitHub permite mantener el archivo siempre actualizado.  

🔹 **Ajuste de horas a UTC**  
   🌎 Los eventos ahora se almacenan en UTC en eventos.json, dejando que Google Calendar ajuste la hora según la región del usuario.  
   🌐 Evita problemas con horarios incorrectos en distintos países.  

🔹 **Mejor manejo de descripciones**  
   📖 Se elige aleatoriamente una descripción entre varias opciones para cada evento, dándole mayor dinamismo.  
   ⌨ Se eliminó la dependencia de Markdown en las descripciones para evitar errores de formato en Google Calendar.  

🔹 **Corrección de errores en fechas de finalización**  
   ⌛ Se ajustaron fechas de fin para que sean mayores a la de inicio y evitar errores en eventos con duración específica.  

---

### 🚀 **Versión 1.0.0 2025-02-07**  
🔹 **Primera versión del calendario lunar en Google Calendar.**  
🔹 **Eventos incluidos:**  
   🌑 Fases lunares exactas.  
   🌘 Eclipses solares y lunares de 2025.  
   🌕 Nombres tradicionales de las lunas llenas.  
   ✨ Rituales y reflexiones alineadas con la energía lunar.  

🔹 **Automatización con Google Apps Script:**  
   📂 **Carga de eventos desde `eventos.json`.**  
   📖 **Asignación dinámica de descripciones desde `descripciones.json`.**  
   🔄 **Sincronización y eliminación de eventos duplicados.**  
   🔒 **Backups automáticos antes de cada modificación.**  

---

### 📜 **Versiones anteriores**  
_(No hay versiones previas)_

---

### 🔮 **Próximas mejoras**  
🚀 **Asignación de colores a los eventos según su categoría.**  
📆 **Integración con formato ICS para otros calendarios.**  
🔮 **Eventos adicionales de astrología y energías cósmicas.**  
📝 **Actualización automática de eventos sin ejecución manual.**  

🌙 **Gracias por apoyar este proyecto!** 💜  
Si quieres conocer más sobre este calendario, visita:  
➡️ [KathWare](https://kathware.com.ar)  
