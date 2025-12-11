document.getElementById("checkBtn").addEventListener("click", checkPassword);

function checkPassword() {
    const password = document.getElementById("passwordInput").value;
    const result = document.getElementById("result");

    let hasNumber = /\d/.test(password);
    let hasSpecial = /[!@#$%^&*]/.test(password);

    if (password.length < 8) {
        result.textContent = "Password rejected: must be at least 8 characters.";
        result.className = "message error";
        return;
    }

    if (!hasNumber) {
        result.textContent = "Password rejected: must contain at least one number.";
        result.className = "message error";
        return;
    }

    if (!hasSpecial) {
        result.textContent = "Password rejected: must contain at least one special character (!@#$%^&*).";
        result.className = "message error";
        return;
    }

    if (password.length >= 12) {
        result.textContent = "Strong password";
        result.className = "message strong";
    } else {
        result.textContent = "Medium password";
        result.className = "message medium";
    }
}
