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
    // Checks that such a username exists in the system
    } else if(!(checkUsername(contactsList, name))) {
        alert("Username or password are incorrect.");
    // If such a username exists in the system, 
    // checks that the password matches the username
    } else if(checkUsername(contactsList, name)) {
        for(let contact of contactsList) {
            if(contact.Username === name) {
                if(password !== contact.Password) {
                    alert("Username or password are incorrect.");
                }
                // If the login is valid
                else {
                    document.write("Login successfully");
                    break; 
                }
            }
        }
    }
}