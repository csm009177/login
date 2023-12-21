document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');

  signupForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      
      const userData = {
          username: username,
          email: email,
          password: password
      };

      const xhr = new XMLHttpRequest();
      xhr.open('POST', '/saveData', true);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(JSON.stringify(userData));
  });
});
