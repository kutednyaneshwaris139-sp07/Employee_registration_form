document.getElementById("employeeForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value;
    let phone = document.getElementById("phone").value.trim();
    let department = document.getElementById("department").value;

    document.querySelectorAll(".error").forEach(e => e.innerText = "");
    document.getElementById("success").innerText = "";

    let valid = true;

    if (name === "") {
        document.getElementById("nameError").innerText = "Name is required";
        valid = false;
    } else if (!/^[A-Za-z ]+$/.test(name)) {
        document.getElementById("nameError").innerText = "Name should contain only letters";
        valid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerText = "Email is required";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter a valid email address";
        valid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerText = "Password is required";
        valid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerText = "Password must be at least 6 characters";
        valid = false;
    }

    if (phone === "") {
        document.getElementById("phoneError").innerText = "Phone number is required";
        valid = false;
    } else if (!/^[0-9]{10}$/.test(phone)) {
        document.getElementById("phoneError").innerText = "Phone number must contain 10 digits";
        valid = false;
    }

    if (department === "") {
        document.getElementById("departmentError").innerText = "Please select a department";
        valid = false;
    }

    if (valid) {
        document.getElementById("success").innerText = "Employee registered successfully!";
        document.getElementById("employeeForm").reset();
    }
});
