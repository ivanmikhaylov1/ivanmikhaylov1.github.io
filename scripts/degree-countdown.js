(() => {
  const t = new Date('2028-06-30T00:00:00+03:00');
  const b = document.getElementById('degree-countdown');
  if (!b) return;

  function p(n) {
    return n.toString().padStart(2, '0')
  }

  function f() {
    const n = new Date();
    let d = t - n;
    if (d < 0) {
      b.textContent = '00д 00ч 00м 00с';
      clearInterval(i);
      return
    }
    const dd = Math.floor(d / 86400000);
    d %= 86400000;
    const h = Math.floor(d / 3600000);
    d %= 3600000;
    const m = Math.floor(d / 60000);
    d %= 60000;
    const s = Math.floor(d / 1000);
    b.textContent = `${p(dd)}д ${p(h)}ч ${p(m)}м ${p(s)}с`
  }

  f();
  const i = setInterval(f, 1000)
})();
