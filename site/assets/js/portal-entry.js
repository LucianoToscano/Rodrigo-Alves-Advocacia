/* UI-only control. Never compare or store the portal password in browser JavaScript. */
(() => {
  'use strict';
  const toggle = document.querySelector('.eye');
  const input = document.querySelector('#senha');
  if (!toggle || !input) return;
  toggle.addEventListener('click', () => {
    const visible = input.type === 'password';
    input.type = visible ? 'text' : 'password';
    toggle.textContent = visible ? 'Ocultar' : 'Mostrar';
    toggle.setAttribute('aria-label', visible ? 'Ocultar senha' : 'Mostrar senha');
    toggle.setAttribute('aria-pressed', String(visible));
  });
})();
