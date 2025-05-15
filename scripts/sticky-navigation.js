(() => {
  const nav = document.querySelector('.navigation');
  if (!nav) return;
  let h = window.innerHeight;

  function t() {
    h = window.innerHeight
  }

  function s() {
    scrollY > h ? nav.classList.add('navigation--fixed') : nav.classList.remove('navigation--fixed')
  }

  addEventListener('resize', t, {passive: !0});
  addEventListener('scroll', s, {passive: !0});
  s()
})();
