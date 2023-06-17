const registrations = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const helper = "Janosbácsi";

function registrationFinder() {
  const regToFind = document.getElementById("name").value;
  const index = registrations.indexOf(regToFind);
//index methoddal csináltam ami visszatéríti a keresett név indexét vagy ha nincs benne akkor -1-el tér vissza.
  if (index !== -1) {
    document.getElementById("answer").innerHTML = "Tisztelt " + regToFind + ", az Ön neve megtalálható regisztrációnkban!";
  } else {
    document.getElementById("answer").innerHTML = "Tisztelt " + regToFind + ", az Ön neve nem található regisztrációnkban! Kérjük értesítse " + helper + "-t.";
  }
}

// a form submit gombjára tettem egy event listenert:
document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault(); // az általam elkészített funkció fog elindulni a gombnyomásra és nem az alapbeállítás.
  registrationFinder();
});

