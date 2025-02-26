

function redirectToGmailCompose(recipient, subject, body) {
    // Construct the Gmail compose URL
    let gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(recipient)}`;
  
    // Add subject and body if provided
    if (subject) {
      gmailComposeUrl += `&su=${encodeURIComponent(subject)}`;
    }
    if (body) {
      gmailComposeUrl += `&body=${encodeURIComponent(body)}`;
    }
  
    // Open the Gmail compose window in a new tab/window
    window.open(gmailComposeUrl, '_blank');
  }
  
  // Example usage:
  // redirectToGmailCompose('recipient@example.com', 'Subject of Email', 'Body of the email.');
