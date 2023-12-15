function performLogin() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Create a login object
    var login = {
      username: username,
      password: password
    };

    // Check login credentials
    if (login.username === "admin" && login.password === "123") {
      document.write("Welcome!");
    } else {
      document.write("Not registered");
    }
  }