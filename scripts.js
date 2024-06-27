document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const responseBox = document.getElementById('responseBox');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const username = document.getElementById('username').value;

        fetch(`http://localhost:9090/hello?name=${username}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.text())
        .then(data => {
            responseBox.style.display = 'block';
            responseBox.textContent = data;
        })
        .catch(error => {
            responseBox.style.display = 'block';
            responseBox.textContent = 'Error: ' + error.message;
        });
    });
});
