document.addEventListener('DOMContentLoaded', function () {
    const hoursTens = document.getElementById('hours-tens');
    const hoursOnes = document.getElementById('hours-ones');
    const minutesTens = document.getElementById('minutes-tens');
    const minutesOnes = document.getElementById('minutes-ones');
  
    function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
  
      hoursTens.textContent = Math.floor(hours / 10);
      hoursOnes.textContent = hours % 10;
      minutesTens.textContent = Math.floor(minutes / 10);
      minutesOnes.textContent = minutes % 10;
    }
  
    function updateClockWithAnimation() {
      const flips = document.querySelectorAll('.flip');
      flips.forEach(flip => {
        flip.style.animation = 'none';
        flip.offsetHeight; /* trigger reflow */
        flip.style.animation = null;
      });
  
      updateClock();
    }
  
    setInterval(updateClockWithAnimation, 1000);
    updateClockWithAnimation();
  });  