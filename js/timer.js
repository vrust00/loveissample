const STARTDATE = new Date('2025-07-30T00:00:00')

function updateTimer(){
   const now = new Date();
   const diff = now - STARTDATE;



   const seconds = Math.floor(diff / 1000);
    const days = Math.floor(seconds / 86400);
    const hours = Math.floor((seconds % 86400) / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    // Форматируем с ведущим нулём (две цифры)
    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(secs).padStart(2, '0');

}


updateTimer()
setInterval(updateTimer, 1000);