# Agenda Litúrgica Maronita 2027

Landing lista para GitHub Pages. No necesita instalar paquetes ni compilar. Incluye logo oficial, cinco fotografías de apoyo, espacio para video, opciones de agenda, cálculo de donación, transferencia bancaria y pedido por WhatsApp.

## 1. Ver la página
Descomprime el ZIP y abre `index.html` con tu navegador. Mantén todos los archivos y la carpeta `assets` juntos. El botón de copiar cuenta funciona en el sitio HTTPS publicado; al abrir un archivo local puede mostrar el número para copiar manualmente.

## 2. Subir a GitHub Pages
1. Crea un repositorio llamado, por ejemplo, `agenda-maronita-2027`.
2. Sube EL CONTENIDO de la carpeta extraída (no el ZIP ni una carpeta contenedora adicional). `index.html` debe quedar en la raíz, junto a `styles.css`, `app.js`, `config.js` y `assets`.
3. En el repositorio abre **Settings → Pages**.
4. En **Build and deployment**, selecciona **Deploy from a branch**.
5. Selecciona la rama **main**, carpeta **/(root)** y guarda con **Save**.
6. Espera a que GitHub indique que la página está publicada y abre el enlace que te muestra.

Guía oficial: https://docs.github.com/es/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## 3. Activar tu video
1. Exporta el video como MP4 (H.264 y audio AAC ofrecen amplia compatibilidad). Conviene comprimirlo para facilitar la reproducción desde celular.
2. Nómbralo `video-agenda-2027.mp4` y colócalo dentro de `assets`.
3. Abre `config.js` y cambia `videoUrl: ""` por:

```js
videoUrl: "assets/video-agenda-2027.mp4",
```

El archivo completo quedaría así:

```js
window.AGENDA_CONFIG = {
  videoUrl: "assets/video-agenda-2027.mp4",
  videoPoster: "assets/portada.jpg"
};
```

4. Sube el MP4 y el archivo `config.js` actualizado a GitHub y confirma los cambios. También puedes usar una URL HTTPS pública directa a un MP4. No pegues un enlace de YouTube en este campo.
5. Abre tu página y pulsa reproducir. El video no se reproduce automáticamente ni emite sonido sin intervención del visitante. Se adapta a videos horizontales y verticales. Si falta el archivo, aparece un aviso sin romper el diseño.

El espacio promocional ya está al principio de la landing. Mientras `videoUrl` esté vacío, se muestra una composición con el año y un aviso de video próximo.

## 4. Cómo funciona el pedido
- El visitante elige blanco y negro ($80.000 COP) o color ($160.000 COP) y la cantidad. Puede hacer pedidos separados si quiere combinar presentaciones.
- Completa nombre, correo y teléfono, y elige recogida o envío. Para envío se solicita ciudad y departamento; la dirección completa se coordina en el chat.
- La página calcula la donación por las agendas, muestra la cuenta de ahorros Bancolombia **18060891989**, titular **Exarcado Maronita Santa Rafqa de Colombia**, NIT **900976504-3**.
- El visitante realiza la transferencia desde su banco.
- El botón prepara el resumen para WhatsApp **+57 310 200 4050**, María Pérez. El visitante debe enviar el mensaje y ADJUNTAR EL COMPROBANTE EN WHATSAPP.
- María verifica el pago, confirma el plazo y gestiona la elaboración bajo pedido.
- Recogida: Carrera 50A #118-18, Bogotá. Envío nacional: adicional y pagado contraentrega por el cliente. La agenda se paga previamente, no contraentrega.

### Alcance de esta versión
No hay servidor, base de datos, envío de correos ni verificación bancaria automática. No se sube el comprobante a la landing ni se adjunta automáticamente a WhatsApp. GitHub recibe únicamente los archivos públicos del sitio: nunca subas comprobantes ni datos de clientes al repositorio. El pedido se registra en la conversación cuando la persona envía el mensaje. Abrir WhatsApp no equivale a confirmar el pedido.

Para recibir comprobantes directamente desde la web se requiere conectar un servicio privado de formularios/archivos o un backend. No hay un formulario ficticio que anuncie una carga exitosa sin guardarla.

## 5. Imágenes y contenido
Las cinco fotos aportadas están integradas y pueden ampliarse al pulsarlas. Se mantienen intactas. La portada visible dice 2026–2027; el sitio la identifica como fotografía de referencia, mientras promociona la agenda 2027. El logo se mantiene sin alteraciones. Puedes reemplazar las fotos en `assets` manteniendo sus nombres.

Textos y datos: `index.html`. Diseño y adaptación móvil: `styles.css`. Cálculos y WhatsApp: `app.js`. Video: `config.js`. Si cambian las donaciones, actualiza tanto los textos HTML como el objeto `prices` de `app.js`.

## 6. Antes de divulgar
- Carga y reproduce el video real.
- Confirma internamente los datos bancarios, la disponibilidad, las condiciones de entrega y el plazo de elaboración.
- Haz un pedido de prueba desde tu teléfono: verifica el resumen y adjunta un comprobante de prueba identificado como tal a María.
- No hay fecha de entrega prometida, inventario ficticio, testimonios inventados ni contador de urgencia.

## Comprobaciones realizadas
Sintaxis JavaScript correcta. Selección de color y 3 unidades comprobada en navegador: $480.000 COP. Cambio a envío nacional comprobado: aparece ciudad/departamento y el aviso de envío adicional. Revisión visual de escritorio. No se ha efectuado ninguna transferencia ni enviado ningún pedido real.
