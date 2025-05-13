const startDate = new Date("2025-05-11T00:00:00");
    const counter = document.getElementById('counter');

    function updateCounter() {
      const now = new Date();
      let diff = Math.floor((now - startDate) / 1000);

      const days = Math.floor(diff / (3600 * 24));
      diff %= 3600 * 24;
      const hours = Math.floor(diff / 3600);
      diff %= 3600;
      const minutes = Math.floor(diff / 60);
      const seconds = diff % 60;

      counter.textContent = `Time since launch: ${String(days).padStart(2, '0')}d ${String(hours).padStart(2, '0')}h ${String(minutes).padStart(2, '0')}m ${String(seconds).padStart(2, '0')}s`;
    }

    updateCounter();
    setInterval(updateCounter, 1000);