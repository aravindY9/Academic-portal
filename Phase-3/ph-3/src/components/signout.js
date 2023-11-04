// SignOut.js

import React, { useEffect } from "react";

const SignOut = () => {
  useEffect(() => {
    // Send a request to your PHP signout script
    fetch('localhost/backend/signout.php', {
      method: 'POST', // You can use POST method for security
      credentials: 'include', // Include cookies in the request
    })
      .then(response => {
        if (response.status === 200) {
          // Redirect to the root route ("/")
          window.location.href = '/';
        } else {
          // Handle any errors or display a message to the user
          console.error('Sign-out failed');
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return <div>Signing out...</div>;
};

export default SignOut;
