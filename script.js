// Select elements
const wishlist = document.getElementById("wishlist");
const wishForm = document.getElementById("wishForm");
const wishInput = document.getElementById("wishInput");

// Function to add a new wish
function addWish(event) {
  event.preventDefault(); // Prevent form submission
  
  // Get the user's input
  const newWish = wishInput.value.trim();
  
  if (newWish.length > 0) {
    // Create a new list item
    const listItem = document.createElement("li");
    listItem.textContent = newWish;
    
    // Add a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "❌";
    deleteButton.style.marginLeft = "10px";
    deleteButton.style.cursor = "pointer";
    deleteButton.addEventListener("click", () => {
      wishlist.removeChild(listItem);
    });

    listItem.appendChild(deleteButton);
    wishlist.appendChild(listItem);
  }

  // Clear the input field
  wishInput.value = "";
}

// Attach event listener to the form
wishForm.addEventListener("submit", addWish);
