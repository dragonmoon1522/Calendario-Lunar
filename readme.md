## **Calendario Lunar y Espiritual Femenino**  

 **Autor:** Katherine Vargas | [(KathWare)](https://kathware.com.ar)  
 **Última actualización:** 2025-02-26  

---

### **Descripción del Proyecto**  

Este proyecto busca crear un **Calendario Lunar y Espiritual Femenino** en **Google Calendar**, que incluya:  
✅ **Fases lunares exactas** con ajuste automático a la zona horaria del usuario.  
✅ **Eventos astronómicos** como eclipses, súper lunas y lunas azules.  
✅ **Nombres tradicionales de las lunas llenas**, según la cultura wicca, astrológica y nativa.  
✅ **Rituales y reflexiones alineadas con la energía lunar.**  
✅ **Automatización mediante un script en Google Apps Script.**  
✅ **Backup automático y actualización dinámica desde GitHub.**  

---

### 🚀 **Cómo funciona**  

1️⃣ **Sube los archivos `eventos.json` y `descripciones.json`** a un repositorio propio en GitHub o clona este mismo.  
2️⃣ **Ejecuta el script en Google Apps Script** para sincronizar el calendario.  
3️⃣ **¡Listo!** El calendario se actualizará automáticamente con eventos nuevos y eliminará los anteriores.  

---

### 📂 **Estructura del Proyecto**  

📌 **Datos del calendario:**  
- 📜 **[`eventos.json`](./eventos.json)** → Contiene fechas, títulos y descripciones de eventos en UTC.  
- 📖 **[`descripciones.json`](./descripciones.json)** → Textos detallados sobre cada evento.  

📌 **Código fuente:**  
- 🖥️ **[`calendar_sync.gs`](./calendar_sync.gs)** → Script de Google Apps Script para sincronización automática.  

📌 **Backups:**  
- 🗄️ **Backup automático en GitHub Gist antes de cada actualización.**  

---

### 🔄 **Novedades en esta versión**  

✅ **Eliminación automática de eventos pasados** antes de agregar los nuevos.  
✅ **Conversión de horas locales a UTC**, permitiendo la correcta adaptación de eventos a cualquier región. 🌍  
✅ **Integración con GitHub para obtener eventos y descripciones directamente desde el repositorio.**  
✅ **Corrección de errores en fechas de finalización de eventos lunares.**  
✅ **Mayor diversidad en descripciones de eventos mediante selección aleatoria.**  
✅ **Backup automático de `eventos.json` antes de cada sincronización.**  

---

### 📅 **Futuras Mejoras**  

🔹 **Asignación de colores a los eventos** según su tipo.  
🔹 **Generación automática de eventos sin ejecución manual.**  
🔹 **Exportación de eventos en formato ICS para otros calendarios.**  
🔹 **Más eventos planetarios y sincronización con fases retrógradas.**  
🔹 **Compatibilidad con asistentes de voz como Alexa y Google Assistant.**  

---

### 📜 **Historial de Versiones**  

🔗 **[📜 Consulta aquí el Historial de Versiones](version.md)**  

---

### 📜 Licencia  

Este proyecto está licenciado bajo la **GNU GPL v3**. Consulta el archivo [`LICENSE`](LICENSE) para más detalles.  

Los textos y descripciones de eventos están licenciados bajo **Creative Commons BY-NC-SA 4.0**.  

---

## 💜 **Agradecimientos**  

Gracias a la comunidad que aporta conocimientos sobre **astronomía, astrología y espiritualidad lunar**. ¡Sigamos creando herramientas accesibles e inspiradoras! 🌕✨  
