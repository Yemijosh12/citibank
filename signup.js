function spinButton(event) {
    // Prevent form submission if it's part of a form
    event.preventDefault();
    
    // Disable the button and remove the text
    const button = document.getElementById('spin-button');
    button.disabled = true;
    button.innerHTML = 'Signing up...';  // Remove 'Sign in' text and add loading text
    
    // Simulate an asynchronous operation (like a sign-in request)
    setTimeout(() => {
      // Optionally, reset the button (re-enable, reset text)
      button.disabled = false;
      button.innerHTML = 'Sign up';  // Reset to original text
      // Handle the actual result of the sign-in process here (success, error, etc.)
      alert('Sign-up successful!');
    }, 2000); // Simulate a 2-second delay
}