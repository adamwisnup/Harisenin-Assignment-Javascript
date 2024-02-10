// Sample user data for login
const users = [
    { username: 'user1', password: 'pass1' },
    { username: 'user2', password: 'pass2' }
];

function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'weather.html';
    } else {
        displayStatus('Invalid username or password. Please try again.');
    }
}

function displayStatus(message) {
    const statusElement = document.getElementById('status');
    statusElement.textContent = message;
}
