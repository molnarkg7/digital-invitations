const targetDate = new Date("September 19, 2026 17:00:00").getTime();
const yesRadio = document.getElementById("yes");
const noRadio = document.getElementById("no");
const options = document.getElementById("options");
const optionsLabel = document.getElementById("options-label");
const message = document.getElementById("message");
const messageLabel = document.getElementById("message-label");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    document.getElementById("days").textContent = 0;
    document.getElementById("hours").textContent = 0;
    document.getElementById("minutes").textContent = 0;
    document.getElementById("seconds").textContent = 0;
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateCountdown();
setInterval(updateCountdown, 1000);

function toggleExtraFields() {
  if (yesRadio.checked) {
    options.classList.remove("hidden");
    optionsLabel.classList.remove("hidden");
    message.classList.remove("hidden");
    messageLabel.classList.remove("hidden");
  } else if (noRadio.checked) {
    options.classList.add("hidden");
    optionsLabel.classList.add("hidden");
    message.classList.add("hidden");
    messageLabel.classList.add("hidden");
  }
}

yesRadio.addEventListener("change", toggleExtraFields);
noRadio.addEventListener("change", toggleExtraFields);

toggleExtraFields();
