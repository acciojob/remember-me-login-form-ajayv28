//your JS code here. If required.
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const existingButton = document.getElementById('existing');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const checkbox = document.getElementById('checkbox');

    // Load saved credentials if they exist
    const savedUsername = localStorage.getItem('username');
    const savedPassword = localStorage.getItem('password');

    if (savedUsername && savedPassword) {
        existingButton.style.display = 'block';
        existingButton.textContent = `Login as existing user`;
    }

    // Form submit event
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form from submitting the traditional way

        const username = usernameInput.value;
        const password = passwordInput.value;

        if (checkbox.checked) {
            localStorage.setItem('username', username);
            localStorage.setItem('password', password);
        } else {
            localStorage.removeItem('username');
            localStorage.removeItem('password');
        }

        alert(`Logged in as ${username}`);
    });

    // Existing user button click event
    existingButton.addEventListener('click', () => {
        alert(`Logged in as ${savedUsername}`);
    });
});
