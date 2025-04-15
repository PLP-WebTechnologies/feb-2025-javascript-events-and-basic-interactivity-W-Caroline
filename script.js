// Function to validate the form
function validateForm(event) {
    event.preventDefault(); // Prevent form submission if validation fails

    // Get form elements
    const username = document.getElementById("username");
    const email = document.getElementById("email");
    const password = document.getElementById("password");

    // Get error message elements
    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");

    // Clear previous error messages
    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";

    let isValid = true;

    // Username validation
    if (username.value.trim() === "") {
        usernameError.textContent = "Username is required!";
        isValid = false;
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email.value)) {
        emailError.textContent = "Please enter a valid email!";
        isValid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters long!";
        isValid = false;
    }

    // If the form is valid, show an alert
    if (isValid) {
        alert("Form submitted successfully!");
    }
}

// Function to toggle background color
function toggleBackgroundColor() {
    const currentColor = document.body.style.backgroundColor;
    document.body.style.backgroundColor = currentColor === "lightblue" ? "lightyellow" : "lightblue";
}

// Event listener for form submission
document.getElementById("myForm").addEventListener("submit", validateForm);

// Event listener for the background color toggle button
document.getElementById("colorToggle").addEventListener("click", toggleBackgroundColor);
