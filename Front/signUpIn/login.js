const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', event => {
    event.preventDefault();
    loginBtn = document.getElementById("loginBtn");
    loginBtn.disabled = true;

    const formData = new FormData(loginForm);
    const data = {};
    for (const [key, value] of formData.entries()) {
        data[key] = value;
    }

    fetch('http://localhost:4000/login', {
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
    if(result.role != 'admin'){
        window.location.href = "../index.html"
    }else{
        window.location.href = "../admin/index.html";
    }
    
    })
    .catch(error => {
    console.error(error);
    });

    loginBtn.disabled = true;
});