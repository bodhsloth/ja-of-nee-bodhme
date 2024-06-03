document
  .getElementById("generateButton")
  .addEventListener("click", function () {
    var circle = document.getElementById("circle");
    circle.innerText = "?"; // Change text to "?" before spinning
    circle.classList.add("spin"); // Add spinning animation class
    circle.classList.remove("green", "red"); // Reset color
    setTimeout(function () {
      var randomNumber = Math.random(); // Generate a random number between 0 and 1
      if (randomNumber < 0.5) {
        circle.innerText = "Ja";
        circle.classList.remove("red");
        circle.classList.add("green");
      } else {
        circle.innerText = "Nee";
        circle.classList.remove("green");
        circle.classList.add("red");
      }
      circle.classList.remove("spin"); // Remove spinning animation class after showing result
    }, 1000); // Wait for 1 second to simulate loading time
  });
