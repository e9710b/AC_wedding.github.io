// Simple countdown + date rendering (Taipei time)
(function(){
  try{
    const target = new Date(EVENT_ISO);
    const dateDisplay = document.getElementById('dateDisplay');
    const formatter = new Intl.DateTimeFormat('zh-Hant', { timeZone: 'Asia/Taipei', year:'numeric', month:'2-digit', day:'2-digit', hour:'2-digit', minute:'2-digit', hour12:false, weekday:'short'});
    if (dateDisplay) dateDisplay.textContent = formatter.format(target);

    function updateCountdown(){
      const now = new Date();
      const diff = target - now;
      const el = document.getElementById('countdown');
      if (!el) return;
      if (diff <= 0){ el.textContent = '今天見！'; return; }
      const d = Math.floor(diff/86400000);
      const h = Math.floor((diff%86400000)/3600000);
      const m = Math.floor((diff%3600000)/60000);
      el.textContent = `倒數 ${d} 天 ${h} 小時 ${m} 分鐘`;
    }
    updateCountdown();
    setInterval(updateCountdown, 30_000);
  }catch(e){ console.warn(e); }
})();
