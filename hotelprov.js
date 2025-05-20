import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.3/firebase-auth.js";

// Toggle between login and register forms
const loginBox = document.querySelector('.form-box.login');
const registerBox = document.querySelector('.form-box.register');

document.querySelector('.register-link').addEventListener('click', function(e) {
    e.preventDefault();
    loginBox.style.display = 'none';
    registerBox.style.display = 'block';
});
document.querySelector('.login-link').addEventListener('click', function(e) {
    e.preventDefault();
    registerBox.style.display = 'none';
    loginBox.style.display = 'block';
});

// Login functionality
const loginForm = document.getElementById('loginForm');
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    try {
        await signInWithEmailAndPassword(window.firebaseAuth, email, password);
        alert('Login successful!');
        window.location.href = 'seller.html'; // Redirect to spackage.html
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Register functionality
const registerForm = document.getElementById('registerForm');
registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = this.querySelectorAll('input[type="password"]')[1].value;
    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    try {
        await createUserWithEmailAndPassword(window.firebaseAuth, email, password);
        alert('Registration successful! Please login.');
        registerBox.style.display = 'none';
        loginBox.style.display = 'block';
    } catch (error) {
        alert('Error: ' + error.message);
    }
}); 