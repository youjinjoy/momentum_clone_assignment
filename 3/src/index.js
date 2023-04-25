const clockTitle = document.querySelector(".js-clock");

function getClock() {
  const now = new Date();
  const eve = new Date(now.getFullYear(), 11, 24);

  const timeLeft = eve.getTime() - now.getTime();
  // getTime(): returns the number of milliseconds

  clockTitle.innerText = `${Math.floor(
    timeLeft / (1000 * 60 * 60 * 24)
  )}d ${Math.floor((timeLeft / (1000 * 60 * 60)) % 24)}h ${Math.floor(
    (timeLeft / (1000 * 60)) % 60
  )}m ${Math.floor((timeLeft / 1000) % 60)}s`;
}

setInterval(getClock, 1000);
