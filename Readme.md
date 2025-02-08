# 🌕 **Calendario Lunar y Espiritual Femenino**

**Autor:** Katherine Vargas | [(KathWare)](https://kathware.com.ar)

## 📌 **Descripción del Proyecto**

Este proyecto tiene como objetivo crear un **Calendario Lunar y Espiritual Femenino** en **Google Calendar**, que incluya:  
✅ Fases lunares exactas.  
✅ Eventos astronómicos como eclipses, súper lunas y lunas azules.  
✅ Nombres tradicionales de la luna llena según la cultura wicca, astrológica y nativa.  
✅ Descripciones detalladas, **rituales sugeridos** y reflexiones alineadas con la energía femenina.  
✅ Sincronización automática mediante un **script en Google Apps Script**.

---

## 🛠 **¿Qué hemos hecho hasta ahora?**

### **1️⃣ Creación de la estructura de datos**  

- Se generaron dos archivos JSON:  
  - **[`eventos.json`](./eventos.json)** → Contiene los eventos lunares con sus fechas, horas y descripciones.  
  - **[`descripciones.json`](./descripciones.json)** → Contiene descripciones detalladas de cada evento, incluyendo su significado, rituales y reflexiones.  

### **2️⃣ Implementación del Script en Google Apps Script**  

- Se desarrolló un **script en Apps Script** para:  
  ✔️ **Eliminar eventos duplicados** en el calendario.  
  ✔️ **Actualizar eventos existentes** si su información cambia.  
  ✔️ **Agregar nuevos eventos** si no están en el calendario.  
  ✔️ **Seleccionar aleatoriamente una descripción del conjunto disponible** en `descripciones.json`.  
  ✔️ **Ignorar comentarios en el JSON sin eliminarlos**.  
  ✔️ **Realizar una copia de seguridad de `eventos.json` antes de modificarlo**.  

### **3️⃣ Gestión de eventos con UID único**  

- Se asigna un **UID único** a cada evento para evitar duplicaciones.  
- Si el evento ya existe en Google Calendar, se actualiza en vez de recrearse.  
- Si se añade un nuevo evento en `eventos.json`, el script lo detecta y lo agrega.  

### **4️⃣ Sincronización de descripciones dinámicas**  

- Las descripciones de los eventos incluyen **significado, rituales y reflexiones**.  
- Se elige aleatoriamente una descripción para cada evento, manteniendo variedad en las reflexiones.  
- Si un `description_id` no tiene descripciones, el script lo registra en los logs y asigna un mensaje predeterminado.  

---

## 🔍 **Fuentes Consultadas**  

Este proyecto se basa en información obtenida de diversas fuentes confiables:  

### 🌑 **Fases Lunares y Eclipses**  

📌 **NASA – Guía de eclipses 2025**  
🔗 [https://eclipse.gsfc.nasa.gov/eclipse.html](https://eclipse.gsfc.nasa.gov/eclipse.html)  

📌 **Infobae – Fechas y fases lunares**  
🔗 [https://www.infobae.com](https://www.infobae.com) *(buscar sección de calendario lunar actualizado)*  

📌 **AstroSeek – Calendario lunar astrológico**  
🔗 [https://www.astro-seek.com/moon-calendar](https://www.astro-seek.com/moon-calendar)  

### 🔮 **Rituales y Significados Espirituales**  

📌 **WeMystic – Rituales lunares y su significado**  
🔗 [https://www.wemystic.com/es/luna-y-su-influencia/](https://www.wemystic.com/es/luna-y-su-influencia/)  

📌 **Escuela Wicca – Magia lunar y astrología**  
🔗 [https://escuelawiccadelamor.com/blog/](https://escuelawiccadelamor.com/blog/)  

📌 **The Old Farmer’s Almanac – Nombres tradicionales de la luna llena**  
🔗 [https://www.almanac.com/full-moon-names](https://www.almanac.com/full-moon-names)  

📌 **Calendario Lunar Maya y Rituales Ancestrales**  
🔗 [https://www.lunarmaya.org](https://www.lunarmaya.org) *(fuente en investigación)*  

---

## 📜 **Futuras Mejoras**  

💡 **Añadir colores a los eventos** en Google Calendar para diferenciar fases, eclipses y súper lunas.  
💡 **Automatizar la actualización de eventos** cada cierto tiempo sin intervención manual.  
💡 **Incluir eventos planetarios adicionales** (como retrógrados importantes o conjunciones).  
💡 **Exportar eventos en formato ICS** para que puedan usarse en otros calendarios.  
💡 **Ampliar descripciones con información de lunaciones en distintas culturas nativas.**  

---

## 🚀 **¿Cómo usarlo?**  

1️⃣ **Subir los archivos `eventos.json` y `descripciones.json` a Google Drive** dentro de la carpeta `Calendario Lunar`.  
2️⃣ **Ejecutar el script en Google Apps Script** para sincronizar el calendario.  
3️⃣ **¡Listo!** El calendario se actualizará automáticamente sin eventos duplicados.  

---

---

## 📜 **Historial de Versiones**  

📌 Para ver los cambios y mejoras del proyecto, consulta el **[Historial de Versiones](./version.md)**.  


## 💜 **Agradecimientos**  

Gracias a la comunidad que aporta conocimientos sobre **astronomía, astrología y espiritualidad lunar**. ¡Sigamos creando herramientas accesibles e inspiradoras! 🌕✨  

---

📌 **Última actualización:** 2025-02-08  