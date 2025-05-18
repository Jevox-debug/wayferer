import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './firebase-config.js';

// Login functionality
const loginForm = document.querySelector('.form-box.login form');
loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        // Redirect to index.html after successful login
        window.location.href = 'index.html';
    } catch (error) {
        alert('Error: ' + error.message);
    }
});

// Register functionality
document.querySelector('.register-link').addEventListener('click', (e) => {
    e.preventDefault();
    const wrapper = document.querySelector('.wrapper');
    const loginBox = document.querySelector('.form-box.login');
    
    // Create register form if it doesn't exist
    if (!document.querySelector('.form-box.register')) {
        const registerBox = document.createElement('div');
        registerBox.className = 'form-box register';
        registerBox.innerHTML = `
            <h2>Register</h2>
            <form action="#">
                <div class="input-box">
                    <span class="icon"><ion-icon name="mail"></ion-icon></span>
                    <input type="email" required>
                    <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required>
                    <label>Password</label>
                </div>
                <div class="input-box">
                    <span class="icon"><ion-icon name="lock-closed"></ion-icon></span>
                    <input type="password" required>
                    <label>Confirm Password</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">I agree to the terms & conditions</label>
                </div>
                <button type="submit" class="btn">Register</button>
                <div class="login-register">
                    <p>Already have an account? <a href="#" class="login-link">Login</a></p>
                </div>
            </form>
        `;
        wrapper.appendChild(registerBox);
        
        // Add register form submission handler
        const registerForm = registerBox.querySelector('form');
        registerForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const email = registerForm.querySelector('input[type="email"]').value;
            const password = registerForm.querySelectorAll('input[type="password"]')[0].value;
            const confirmPassword = registerForm.querySelectorAll('input[type="password"]')[1].value;
            
            if (password !== confirmPassword) {
                alert("Passwords don't match!");
                return;
            }
            
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                alert('Successfully registered!');
                // Switch back to login form
                showLoginForm();
            } catch (error) {
                alert('Error: ' + error.message);
            }
        });
        
        // Add login link handler
        registerBox.querySelector('.login-link').addEventListener('click', (e) => {
            e.preventDefault();
            showLoginForm();
        });
    }
    
    // Hide login form and show register form
    loginBox.style.display = 'none';
    document.querySelector('.form-box.register').style.display = 'block';
});

function showLoginForm() {
    document.querySelector('.form-box.login').style.display = 'block';
    document.querySelector('.form-box.register').style.display = 'none';
} 