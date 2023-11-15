var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Password Function 
function generatePassword() {
    var passwordlength = parseInt(prompt("Enter password length (between 8 and 128 characters)):"));

    while (isNaN(length) || length < 8 || length > 128) {
        alert("Please enter a valid number between 8 and 128.")
        length = prompt("Enter password length (between 8 and 128 characters):")
    }

    var includeLowercase = confirm("Include lowercase letters?");
    var includeUppercase = confirm("Include uppercase letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSpecialChars = confirm("Include special characters?");

    // Validate that at least one character type is selected
    while (!(includeLowercase || includeUppercase || includeNumbers || includeSpecialChars)) {
        alert("Please select at least one character type.");
        includeLowercase = confirm("Include lowercase letters?");
        includeUppercase = confirm("Include uppercase letters?");
        includeNumbers = confirm("Include numbers?");
        includeSpecialChars = confirm("Include special characters?");
    }
// Return 
    return generatePasswordFromCriteria({
        length: parseInt(length),
        includeLowercase: includeLowercase,
        includeUppercase: includeUppercase,
        includeNumbers: includeNumbers,
        includeSpecialChars: includeSpecialChars
    });
}
// Data from Password 
function generatePasswordFromCriteria(criteria) {
    var allChars = "";
    var password = "";

    if (criteria.includeLowercase) {
        allChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (criteria.includeUppercase) {
        allChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (criteria.includeNumbers) {
        allChars += "123456789";
    }
    if (criteria.includeSpecialChars) {
        allChars += "!@#$%^&*()";
    }

    for (var i = 0; i < criteria.length; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
// Print password 
    return password;
}






