import { getLocalUser } from "../../helpers/Storage.js"

const user = getLocalUser();
if(!user || user.role != 'admin') window.location.href = "../index.html";

fetch('http://localhost:4000/user',{
method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
headers: {
    'Content-Type': 'application/json',
    'authToken': user.authToken
  },
})
.then(response => response.json())
.then(data => {
    // get table element and table body element
    
    const table = document.getElementById('userTable');
    
    data.forEach(user => {
        const row = table.insertRow();

        delete user.password;
        
        const option = row.insertCell();

        const avatarAndFullName  = `
            <img src="../assets/imgs/avatar/${user.avatar}"/> 
            <span class="ps-2">${user.fullName}</span>
        `;

        const profile = row.insertCell();
        profile.innerHTML  = avatarAndFullName;

        const email = row.insertCell();
        email.textContent = user.email;
        
        const phone = row.insertCell();
        phone.textContent = user.phone;
        
        const status = row.insertCell();
        status.textContent = user.status;
        
        const requestID = row.insertCell();
        requestID.textContent = user.requestID;
        
        const feedbackID = row.insertCell();
        feedbackID.textContent = user.feedbackID;
        
        const createdAt = row.insertCell();
        createdAt.textContent = user.createdAt;
    });
})
.catch(error => {
    console.error(error);
});
