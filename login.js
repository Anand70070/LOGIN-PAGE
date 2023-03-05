function validate() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Perform basic client-side validation
    if (username === "" || password === "") {
      alert("Please enter both username and password");
    }
    if(username === "Singh"&&password === "Singh")
    {
        alert("Logged in")
    }
    else{
        alert("Invalid cred")
    }
  
  }