'use strict';
const form = document.getElementById('orderForm');
const edition = document.getElementById('edition');
const quantity = document.getElementById('quantity');
const delivery = document.getElementById('delivery');
const names = {bn: 'Blanco y negro', color: 'Color'};
const prices = {bn: 80000, color: 160000};
const money = number => '$' + new Intl.NumberFormat('es-CO').format(number) + ' COP';
function updateSummary() {
  const count = Number(quantity.value);
  const valid = Number.isInteger(count) && count >= 1 && count <= 100;
  document.getElementById('total').textContent = valid ? money(prices[edition.value] * count) : 'Revisa la cantidad';
  document.getElementById('summary').textContent = valid ? `${count} ${count === 1 ? 'agenda' : 'agendas'} · ${names[edition.value]}` : 'Ingresa entre 1 y 100 agendas';
  const shipping = delivery.value === 'shipping';
  document.getElementById('cityField').hidden = !shipping;
  document.getElementById('city').required = shipping;
  document.getElementById('deliveryNote').textContent = shipping ? 'El envío es adicional y lo pagas al recibir. María coordinará contigo la tarifa y la dirección completa por WhatsApp.' : 'Recoge en la Carrera 50A #118-18, Bogotá. Coordinaremos contigo cuándo estará lista.';
}
form.addEventListener('input', updateSummary);
form.addEventListener('change', updateSummary);
document.querySelectorAll('.choose').forEach(button => button.addEventListener('click', () => {
  edition.value = button.dataset.edition;
  updateSummary();
  document.getElementById('pedido').scrollIntoView({behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth'});
  edition.focus({preventScroll: true});
}));
document.getElementById('copyAccount').addEventListener('click', async () => {
  const status = document.getElementById('copyStatus');
  try {await navigator.clipboard.writeText('18060891989'); status.textContent = 'Cuenta copiada: 18060891989';}
  catch {status.textContent = 'Selecciona y copia este número: 18060891989';}
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  for (const key of ['name','email','phone', ...(delivery.value === 'shipping' ? ['city'] : [])]) {
    const input = form.elements.namedItem(key);
    if (!String(data.get(key)).trim()) {input.setCustomValidity('Completa este campo.'); input.reportValidity(); input.addEventListener('input', () => input.setCustomValidity(''), {once:true}); return;}
  }
  const count = Number(quantity.value);
  const message = [
    'Hola María, quiero pedir la Agenda Litúrgica Maronita 2027.', '',
    `Nombre: ${String(data.get('name')).trim()}`, `Correo: ${String(data.get('email')).trim()}`, `Teléfono: ${String(data.get('phone')).trim()}`, '',
    `Presentación: ${names[edition.value]}`, `Cantidad: ${count}`, `Donación total por las agendas: ${money(prices[edition.value] * count)}`,
    delivery.value === 'shipping' ? `Entrega: envío a ${String(data.get('city')).trim()}. El envío es adicional y lo pago contraentrega.` : 'Entrega: recoger en el Exarcado, Carrera 50A #118-18, Bogotá.', '',
    'Adjuntaré el comprobante de transferencia en este chat. Por favor, confirma su recepción y el plazo de elaboración. Entiendo que el pedido queda pendiente de la verificación de la transferencia.',
    'Autorizo usar mis datos para gestionar este pedido y coordinar la entrega.'
  ].join('\n');
  const url = 'https://wa.me/573102004050?text=' + encodeURIComponent(message);
  const status = document.getElementById('orderStatus');
  status.replaceChildren(document.createTextNode('Envía el mensaje en WhatsApp y adjunta allí tu comprobante. Si no se abrió, '));
  const fallback = document.createElement('a');
  fallback.href = url; fallback.target = '_blank'; fallback.rel = 'noopener'; fallback.textContent = 'continúa aquí'; status.append(fallback);
  window.open(url, '_blank', 'noopener,noreferrer');
});
const config = window.AGENDA_CONFIG || {};
if (config.videoUrl) {
  const video = document.getElementById('promoVideo');
  video.src = config.videoUrl;
  if (config.videoPoster) video.poster = config.videoPoster;
  video.hidden = false;
  document.getElementById('videoPlaceholder').hidden = true;
  document.getElementById('videoFrame').classList.add('has-video');
  video.addEventListener('error', () => {
    video.hidden = true;
    document.getElementById('videoPlaceholder').hidden = false;
    document.querySelector('.video-note').textContent = 'El video no está disponible en este momento.';
    document.getElementById('videoFrame').classList.remove('has-video');
  });
}
updateSummary();
