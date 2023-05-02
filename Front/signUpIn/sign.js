var email=document.getElementById("loginEmail")
var pass=document.getElementById("loginPass")

function done(){
if(email.value=="adminmail" && pass.value=="A4D5M6I4N"){
    window.location.href="../admin/index.html";
}
// else{
//     console.log("no");
// }
}

function register(){
    const registerForm = document.getElementById('registerForm');
    registerForm.addEventListener('submit', event => {
    event.preventDefault();
    registerBtn = document.getElementById("registerBtn");
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
}

function login() {
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
    }