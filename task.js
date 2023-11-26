const timer = document.getElementById('timer');
  let seconds = parseInt(timer.textContent);

  const interval = setInterval(() => {
    if (seconds > 0) {
      seconds--;
      let hours = Math.floor(seconds / 3600);
      let minutes = Math.floor((seconds % 3600) / 60);
      let elseconds = seconds % 60;
      timer.textContent = `${hours.toString().padStart(2, '0')} : ${minutes.toString().padStart(2, '0')} : ${elseconds.toString().padStart(2, '0')}`
    } else {
      // alert(location);
      alert('Вы победили в конкурсе!');
      // clearInterval(interval);
    }
  }, 1000);

