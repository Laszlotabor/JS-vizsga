const ages = [3, 10, 18, 20];

const submitButton = document.querySelector("input[type='submit']");
submitButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  const inputAge = parseInt(document.getElementById("number").value);
  
  const result = ages.find(age => age > inputAge);
  
  if (result) {
    document.getElementById("answer").textContent = "Az első szám, ami nagyobb, mint a megadott: " + result;
  } else {
    document.getElementById("answer").textContent = "Nincs olyan szám, ami nagyobb, mint a megadott.";
  }
});
