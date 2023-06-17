const registrations = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"];
const helper = "Janosbácsi";

function registrationFinder() {
  const regToFind = document.getElementById("name").value;
  let found = false;

  for (let i = 0; i < registrations.length; i++) {
    if (registrations[i] === regToFind) {
      found = true;
      break;
    }
  }

  if (found) {
    document.getElementById("answer").innerHTML = "Tisztelt " + regToFind + ", az Ön neve megtalálható regisztrációnkban!";
  } else {
    document.getElementById("answer").innerHTML = "Tisztelt " + regToFind + ", az Ön neve nem található regisztrációnkban! Kérjük értesítse " + helper + "-t.";
  }
}

document.querySelector("form").addEventListener("submit", function(event) {
  event.preventDefault();
  registrationFinder();
});
