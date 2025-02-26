
// Get references to the elements
const eyeIcon = document.getElementById('eyeicon');
const price = document.getElementById('price');

// Initial state: price is visible
let isVisible = true;

// Function to toggle visibility
eyeIcon.addEventListener('click', function() {
  isVisible = !isVisible; // Toggle visibility

  if (isVisible) {
    price.style.display = 'inline'; // Show the price
    eyeIcon.src = 'image/png.png'; // Show open eye image
  } else {
    price.style.display = 'none'; // Hide the price
    eyeIcon.src = 'image/png.png'; // Show closed eye image
  }
});
