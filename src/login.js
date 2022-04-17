function validateLogin() {
    //collect login data in JavaScript variables  
    let name = document.getElementById("name").value;  
    let password = document.getElementById("password").value;
    
    // Checks that the username field is not empty
	if(name.length == 0) {
		alert("Please enter a username.");
    // Checks that the password field is not empty  
    } else if(password.length == 0) {
		alert("Please enter a password.");
    console.log(contactsList.Username);
    console.log(contactsList.Password);
    } else if(checkUsername(contactsList, name)) {
        if() {
            
        }
        alert("Username or password are incorrect.");
    } else {
        alert("success");
    }
    
}