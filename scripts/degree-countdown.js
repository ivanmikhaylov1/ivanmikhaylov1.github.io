(() => {
  const targetDate = new Date('2028-06-30T00:00:00+03:00');
  const countdownElement = document.getElementById('degree-countdown');
  if (!countdownElement) return;

  const padNumber = (num) => num.toString().padStart(2, '0');
  
  let lastUpdate = '';
  
  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;
    
    if (diff < 0) {
      countdownElement.textContent = '00д 00ч 00м 00с';
      clearInterval(interval);
      return;
    }
    
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    
    const newUpdate = `${padNumber(days)}д ${padNumber(hours)}ч ${padNumber(minutes)}м ${padNumber(seconds)}с`;
    
    if (newUpdate !== lastUpdate) {
      countdownElement.textContent = newUpdate;
      lastUpdate = newUpdate;
    }
  }

  updateCountdown();
  const interval = setInterval(updateCountdown, 1000);
})();
