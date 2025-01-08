// Select all accordion buttons
const accordions = document.querySelectorAll(".accordion");

// Loop through each accordion and add a click event listener
accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    // Toggle the active class on the button
    this.classList.toggle("active");

    // Get the panel associated with this accordion
    const panel = this.nextElementSibling;

    // Toggle the visibility of the panel
    if (panel.style.display === "block") {
      panel.style.display = "none";
      this.textContent = "Voir ma collection"; // Update button text
    } else {
      panel.style.display = "block";
      this.textContent = "Cacher"; // Update button text
    }
  });
});
