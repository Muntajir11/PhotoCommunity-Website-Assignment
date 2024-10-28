document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Clear previous error messages
    const errorElements = document.querySelectorAll('.text-danger');
    errorElements.forEach((el) => el.classList.add('d-none'));

    // Get form values
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation flags
    let isValid = true;

    // Validate First Name
    if (!firstName) {
        document.getElementById('firstNameError').textContent = 'First name is required.';
        document.getElementById('firstNameError').classList.remove('d-none');
        isValid = false;
    }

    // Validate Last Name
    if (!lastName) {
        document.getElementById('lastNameError').textContent = 'Last name is required.';
        document.getElementById('lastNameError').classList.remove('d-none');
        isValid = false;
    }

    // Validate Email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        document.getElementById('emailError').classList.remove('d-none');
        isValid = false;
    }

    // Validate Phone Number
    const phonePattern = /^\d{10}$/; // Example pattern for 10-digit phone number
    if (!phone || !phonePattern.test(phone)) {
        document.getElementById('phoneError').textContent = 'Please enter a valid phone number.';
        document.getElementById('phoneError').classList.remove('d-none');
        isValid = false;
    }

    // Validate Password
    if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters.';
        document.getElementById('passwordError').classList.remove('d-none');
        isValid = false;
    }

    // If all validations pass, log the form data
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phone,
            password: password
        };
        console.log(formData);
        document.getElementById('signupForm').reset();
    }
});
