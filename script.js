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

//prevod logika

// const translations = {
//   sr: {
//     intro_text:
//       'Dragi naši, <br /> Sa velikom radošću i još većom dozom uzbuđenja, pozivamo Vas da budete deo dana, kada ćemo reći "DA" i zvanično postati tim za ceo život!',
//     countdown_title: "Odbrojavanje do našeg velikog dana",
//     dani: "Dana",
//     sati: "Sati",
//     minuti: "Minuta",
//     sekundi: "Sekundi",
//     location: "Lokacija",
//     restoran: "Restoran Ribarac",
//     tacna_lokacija: "Ribarsko Ostrvo, Novi Sad, Serbia",
//     google_maps: "Prikaži u Google Maps",
//     program: "Program dana",
//     svatovi:
//       "<b>Skup svatova</b><br />Dvorište restorana Ribarac, Zajednički polazak u crkvu 13:00h",
//     crkveno:
//       "<b>Crkveno venčanje</b><br />Hram Svetog Simeona Mirotočivog (Ive Lole Ribara 1, Veternik)",
//     rucak: "<b>Ručak</b><br />Restoran Ribarac</b>",
//     gradjansko: "<b>Građansko venčanje</b><br />Restoran Ribarac",
//     kraj: "<b>Kraj</b>",
//     potvrda:
//       "Molimo Vas da u nastavku pozivnice potvrdite svoj dolazak i navedete broj osoba koje sa Vama dolaze, najkasnije do 1.8.2026.",
//     prisustvo: "Radujemo se Vašem prisustvu!",
//     are_you_coming: "Da li dolazite?",
//     da: "Da",
//     ne: "Ne",
//     ime: "Ime i prezime",
//     guest_label: "Ime i prezime {n}. gosta",
//     koliko_osoba: "Sa koliko osoba dolazite?",
//     izaberi: "Izaberi...",
//     dolazim_sam: "Dolazim sam",
//     dugme_posalji: "Pošalji",
//     ocekujemo_vas: "Očekujemo Vas!",
//     s_ljubavlju: "S ljubavlju,",
//     septembar: "Septembar 19, 2026",
//     success_yes:
//       "Hvala! Vaš odgovor je uspešno poslat. Radujemo se što ćete biti deo našeg velikog dana! ❤️",
//     success_no: "Hvala! Vaš odgovor je uspešno poslat! ❤️",
//   },
//   nr: {
//     intro_text:
//       "Kjære familie og venner, <br /> Med glede i hjertet inviterer vi dere til å dele en helt spesiell dag med oss, når vi lover hverandre kjærlighet og troskap for livet!",
//     countdown_title: "Nedtelling til vår spesielle dag",
//     dani: "Dager",
//     sati: "Timer",
//     minuti: "Minutter",
//     sekundi: "Sekunder",
//     location: "Sted",
//     restoran: "Restauranten Ribarac",
//     tacna_lokacija: "Ribarsko Ostrvo, Novi Sad, Srbija",
//     google_maps: "Vis i Google Maps",
//     program: "Bryllupsprogram",
//     svatovi:
//       "<b>Oppmøte for bryllupsgjester</b><br />Gårdsplassen ved restauranten Ribarac, Felles avreise til kirken kl. 13:00h",
//     crkveno:
//       "<b>Kirkelig vielse</b><br />Hram Svetog Simeona Mirotočivog (Adresse: Ive Lole Ribara 1, Veternik)",
//     rucak: "<b>Middag</b><br />Restauranten Ribarac</b>",
//     gradjansko: "<b>Borgelig vielse</b><br />Restauranten Ribarac",
//     kraj: "<b>Slutt</b>",
//     potvrda:
//       "Vi ber dere om å bekrefte om dere kommer og hvor mange som kommer i fortsettelsen av denne invitasjonen, senest 1. august 2026.",
//     prisustvo: "Vi gleder oss til å se dere!",
//     are_you_coming: "Kommer du?",
//     da: "Ja",
//     ne: "Nei",
//     ime: "Navn og ettervanv",
//     guest_label: "Navn og ettervanv til gjest nr. {n}.",
//     koliko_osoba: "Hvor mange kommer?",
//     izaberi: "Velg...",
//     dolazim_sam: "Jer kommer alene",
//     dugme_posalji: "Send",
//     ocekujemo_vas: " ",
//     s_ljubavlju: "Med vennlig hilsen,",
//     septembar: "September 19, 2026",
//     success_yes:
//       "Takk! Ditt svar er sendt. Vi gleder oss for at du er en del av vår store dag! ❤️",
//     success_no: "Takk! Ditt svar er sendt! ❤️",
//   },
// };

// const languageSelect = document.getElementById("languageSelect");

// function changeLanguage(lang) {
//   document.querySelectorAll("[data-i18n]").forEach((el) => {
//     const key = el.getAttribute("data-i18n");
//     if (translations[lang][key]) {
//       el.innerHTML = translations[lang][key];
//     }
//   });

//   document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
//     const key = el.getAttribute("data-i18n-placeholder");
//     if (translations[lang][key]) {
//       el.placeholder = translations[lang][key];
//     }
//   });

//   localStorage.setItem("lang", lang);
// }

// languageSelect.addEventListener("change", () => {
//   changeLanguage(languageSelect.value);
// });

// const savedLang = localStorage.getItem("lang") || "sr";
// languageSelect.value = savedLang;
// changeLanguage(savedLang);
