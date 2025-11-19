/*
 * Semesterbegleitender Test: Form Validation Script
 * Alle client-side Validations-Checks
 */

document.addEventListener('DOMContentLoaded', () => {

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
    const commonPasswords = ['password', '123456', 'qwerty', 'admin', 'passwort', 'hallo', 'meister'];
    const reservedNames = ['admin', 'administrator', 'root', 'support', 'info', 'dungeonmaster'];
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
            setError(nameInput, 'Charaktername ist erforderlich.');
            return false;
        }
        if (xssRegex.test(value)) {
            setError(nameInput, 'Die Zeichen < und > sind nicht erlaubt.');
            return false;
        }
        if (reservedNames.includes(value.toLowerCase())) {
            setError(nameInput, 'Dieser Name ist reserviert.');
            return false;
        }

        setSuccess(nameInput);
        return true;
    }

    // 5.2. Validate Email (Check 2)
    function validateEmail() {
        const value = emailInput.value.trim();

        if (value === '') {
            setError(emailInput, 'E-Mail ist erforderlich.');
            return false;
        }
        if (!isEmail(value)) {
            setError(emailInput, 'Bitte gib eine gültige E-Mail-Adresse ein.');
            return false;
        }

        const domain = value.split('@')[1];
        if (disposableDomains.includes(domain)) {
            setError(emailInput, 'Wegwerf-E-Mail-Adressen sind nicht gestattet.');
            return false;
        }

        setSuccess(emailInput);
        return true;
    }

    // 5.3. Validate Password (Check 3)
    function validatePassword() {
        const value = passwordInput.value.trim();
        const lowerCaseValue = value.toLowerCase();

        if (value === '') {
            setError(passwordInput, 'Passwort ist erforderlich.');
            return false;
        }
        if (value.length < 10) {
            setError(passwordInput, 'Das Passwort muss mindestens 10 Zeichen lang sein.');
            return false;
        }
        if (!/[A-Z]/.test(value)) {
            setError(passwordInput, 'Das Passwort muss mindestens einen Großbuchstaben enthalten.');
            return false;
        }
        if (!/[a-z]/.test(value)) {
            setError(passwordInput, 'Das Passwort muss mindestens einen Kleinbuchstaben enthalten.');
            return false;
        }
        if (!/[0-9]/.test(value)) {
            setError(passwordInput, 'Das Passwort muss mindestens eine Zahl enthalten.');
            return false;
        }

        if (commonPasswords.some(commonPass => lowerCaseValue.includes(commonPass))) {
            setError(passwordInput, 'Das Passwort enthält zu einfache Bestandteile (z.B. "password" oder "123456").');
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
            setError(passwordConfirmInput, 'Passwortbestätigung ist erforderlich.');
            return false;
        } else if (passwordValue !== confirmValue) {
            setError(passwordConfirmInput, 'Die Passwörter stimmen nicht überein.');
            return false;
        }
        setSuccess(passwordConfirmInput);
        return true;
    }

    // 5.5. Validate Birthday (Check 4)
    function validateBirthday() {
        const value = birthdayInput.value;
        if (value === '') {
            setError(birthdayInput, 'Geburtsdatum ist erforderlich.');
            return false;
        }

        const birthDate = new Date(value);
        const today = new Date();

        if (birthDate > today) {
            setError(birthdayInput, 'Geburtsdatum darf nicht in der Zukunft liegen.');
            return false;
        }

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        const dayDiff = today.getDate() - birthDate.getDate();

        if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
            age--;
        }

        if (age < 18) {
            setError(birthdayInput, 'Du musst mindestens 18 Jahre alt sein, um beizutreten.');
            return false;
        }
        if (age > 120) {
            setError(birthdayInput, 'Das Alter scheint ungültig. Bitte prüfe das Jahr.');
            return false;
        }

        setSuccess(birthdayInput);
        return true;
    }

    // 5.6. Validate Bio (Check 5)
    function validateBio() {
        const value = bioInput.value;
        const length = value.length;

        if (xssRegex.test(value)) {
            setError(bioInput, 'Die Zeichen < und > sind nicht erlaubt.');
            return false;
        }
        if (length > 200) {
            setError(bioInput, 'Die Bio darf maximal 200 Zeichen lang sein.');
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
        const copyrightElement = document.getElementById('copyright-notice');

        if (!copyrightElement) {
            console.error('Footer element (id="copyright-notice") not found.');
            return;
        }

        const currentYear = new Date().getFullYear();
        copyrightElement.textContent = `Erstellt mit 🍺 © ${currentYear} Maximilian Wagner`;
    }

    // 8. Initial Function Calls
    createCopyrightNotice();

});