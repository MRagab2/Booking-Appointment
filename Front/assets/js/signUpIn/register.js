import { removeLocalUser, setLocalUser } from "../../helpers/Storage.js";
removeLocalUser();

const registerForm = document.getElementById('registerForm');

registerForm.addEventListener('submit', event => {
    event.preventDefault();
    let registerBtn = document.getElementById("registerBtn");
    registerBtn.disabled = true;

    const formData = new FormData(registerForm);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    fetch('http://localhost:4000/register', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
    setLocalUser({
        authToken: result.token
    });

    window.location.href = "../index.html";
    })
    .catch(error => {
    console.error(error);
    });
    registerBtn.disabled = false;
    
});