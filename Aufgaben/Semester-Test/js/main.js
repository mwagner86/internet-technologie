/*
 * Semesterbegleitender Test: Form Validation Script
 * Clientseitige Validierung für das Registrierungsformular.
 * Erweitert um PoCs von gängiger Security Validierung
 * Maximilian Wagner
 */

document.addEventListener('DOMContentLoaded', () => {

    createCopyrightNotice();

    // 1. DOM Elements
    const form = document.getElementById('registration-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const passwordConfirmInput = document.getElementById('password-confirm');
    const birthdayInput = document.getElementById('birthday');
    const bioInput = document.getElementById('bio');
    const charCountElement = document.getElementById('char-count');

    // 2. Security Policies
    const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'passwort'];
    const reservedNames = ['admin', 'administrator', 'root', 'support', 'info'];
    const disposableDomains = ['mailinator.com', '10minutemail.com', 'tempmail.com'];
    const xssRegex = /[<>]/; // Disallows < and >

    // 3. Main Event: Form Submit
    form.addEventListener('submit', (event) => {
        // Prevents the default form submission
        event.preventDefault();

        // 3.1. Run All Validations
        const isNameValid = validateName();
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        const isPasswordConfirmValid = validatePasswordConfirm();
        const isBirthdayValid = validateBirthday();
        const isBioValid = validateBio();

        // 3.2. Check 7: Successful Redirect
        if (isNameValid && isEmailValid && isPasswordValid && isPasswordConfirmValid && isBirthdayValid && isBioValid) {
            // All checks passed
            window.location.href = 'success.html';
        }
    });

    // 4. Live Event: Character Counter (Check 6)
    bioInput.addEventListener('input', () => {
        const remaining = 200 - bioInput.value.length;
        charCountElement.textContent = remaining.toString();

        const counterContainer = charCountElement.parentElement; // .char-counter
        if (remaining < 0) {
            counterContainer.classList.add('error');
        } else {
            counterContainer.classList.remove('error');
        }
    });

    // 5. Validation Functions

    // 5.1. Validate Name (Check 1)
    function validateName() {
        const value = nameInput.value.trim();

        if (value === '') {
            setError(nameInput, 'Name is required.');
            return false;
        }
        if (xssRegex.test(value)) {
            setError(nameInput, 'Characters < and > are not allowed.');
            return false;
        }
        if (reservedNames.includes(value.toLowerCase())) {
            setError(nameInput, 'This name is reserved.');
            return false;
        }

        setSuccess(nameInput);
        return true;
    }

    // 5.2. Validate Email (Check 2)
    function validateEmail() {
        const value = emailInput.value.trim();

        if (value === '') {
            setError(emailInput, 'Email is required.');
            return false;
        }
        if (!isEmail(value)) {
            setError(emailInput, 'Please enter a valid email address.');
            return false;
        }

        const domain = value.split('@')[1];
        if (disposableDomains.includes(domain)) {
            setError(emailInput, 'Disposable email addresses are not allowed.');
            return false;
        }

        setSuccess(emailInput);
        return true;
    }

// 5.3. Validate Password (Check 3)
    function validatePassword() {
        const value = passwordInput.value.trim();
        const lowerCaseValue = value.toLowerCase(); // For efficient checking

        if (value === '') {
            setError(passwordInput, 'Password is required.');
            return false;
        }
        if (value.length < 10) {
            setError(passwordInput, 'Password must be at least 10 characters long.');
            return false;
        }
        if (!/[A-Z]/.test(value)) {
            setError(passwordInput, 'Password must contain at least one uppercase letter.');
            return false;
        }
        if (!/[a-z]/.test(value)) {
            setError(passwordInput, 'Password must contain at least one lowercase letter.');
            return false;
        }
        if (!/[0-9]/.test(value)) {
            setError(passwordInput, 'Password must contain at least one number.');
            return false;
        }

        if (commonPasswords.some(commonPass => lowerCaseValue.includes(commonPass))) {
            setError(passwordInput, 'Password contains a common or weak component (e.g., "password" or "123456").');
            return false;
        }

        setSuccess(passwordInput);
        return true;
    }

    // 5.4. Validate Password Confirm (Check 3.b)
    function validatePasswordConfirm() {
        const passwordValue = passwordInput.value.trim();
        const confirmValue = passwordConfirmInput.value.trim();

        if (confirmValue === '') {
            setError(passwordConfirmInput, 'Password confirmation is required.');
            return false;
        } else if (passwordValue !== confirmValue) {
            setError(passwordConfirmInput, 'Passwords do not match.');
            return false;
        }
        setSuccess(passwordConfirmInput);
        return true;
    }

    // 5.5. Validate Birthday (Check 4)
    function validateBirthday() {
        const value = birthdayInput.value;
        if (value === '') {
            setError(birthdayInput, 'Birthday is required.');
            return false;
        }

        const birthDate = new Date(value);
        const today = new Date();

        if (birthDate > today) {
            setError(birthdayInput, 'Birthday cannot be in the future.');
            return false;
        }

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 18) {
            setError(birthdayInput, 'You must be at least 18 years old.');
            return false;
        }
        if (age > 120) {
            setError(birthdayInput, 'Age seems incorrect. Please enter a valid year.');
            return false;
        }

        setSuccess(birthdayInput);
        return true;
    }

    // 5.6. Validate Bio (Check 5)
    function validateBio() {
        const value = bioInput.value; // No .trim() to check length accurately
        const length = value.length;

        if (xssRegex.test(value)) {
            setError(bioInput, 'Characters < and > are not allowed.');
            return false;
        }
        if (length > 200) {
            setError(bioInput, 'Bio must be 200 characters or less.');
            return false;
        }

        setSuccess(bioInput);
        return true;
    }


    // 6. Helper Functions
    function setError(inputElement, message) {
        const inputGroup = inputElement.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-message');

        errorDisplay.innerText = message;
        inputGroup.classList.add('error');
        inputGroup.classList.remove('success');
    }

    function setSuccess(inputElement) {
        const inputGroup = inputElement.parentElement;
        const errorDisplay = inputGroup.querySelector('.error-message');

        errorDisplay.innerText = '';
        inputGroup.classList.add('success');
        inputGroup.classList.remove('error');
    }

    function isEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // 7. Copyright Notice Function
    function createCopyrightNotice() {
        const footer = document.getElementById('form-footer');
        if (!footer) {
            console.error('Footer element (id="form-footer") not found.');
            return;
        }

        const currentYear = new Date().getFullYear();

        const copyrightText = `Made with 🍺 © ${currentYear} Maximilian Wagner`;

        const copyrightElement = document.createElement('p');
        copyrightElement.id = 'copyright-notice'; // Für CSS-Styling
        copyrightElement.textContent = copyrightText;

        footer.appendChild(copyrightElement);
    }

});