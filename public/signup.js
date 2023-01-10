function signUp() {
    // Get the form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
  
    // Make the API call
    fetch('/https://ezdmv-datasnagger-wjikbo35kq-ez.a.run.app/?request_type=scrape&user_zip=27705&user_tolerance=7&appointment_type=Driver%20License%20-%20First%20Time', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password
      })
    }).then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error: ' + response.statusText);
    }).then(data => {
      console.log(data);
    }).catch(error => {
      console.error(error);
    });
  }

//   This JavaScript function uses the fetch() function to make a POST request to the /signup endpoint with the form values. The Content-Type header is set to application/json to indicate that the body of the request is in JSON format. The then() and catch() methods are used to handle the response and any errors that may occur.

//   You can call this function when the form is submitted by adding an onsubmit attribute to the form element and setting it to the signUp() function: