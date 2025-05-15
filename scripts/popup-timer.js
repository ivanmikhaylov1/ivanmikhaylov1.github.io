(() => {
  const KEY = 'visitPopupClosed';
  const popup = document.getElementById('visit-popup');
  if (!popup) return;
  const popupClose = popup.querySelector('.visit-popup__close');

  if (!localStorage.getItem(KEY)) {
    setTimeout(() => popup.classList.add('show'), 10_000);
  }

  function hide() {
    popup.classList.remove('show');
    localStorage.setItem(KEY, '1');
  }

  popupClose.addEventListener('click', hide);
  popup.addEventListener('click', e => {
    if (e.target === popup) hide();
  });
})();
