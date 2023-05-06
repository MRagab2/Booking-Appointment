import { getLocalUser } from "../../helpers/Storage.js"

const user = getLocalUser();
let authToken = user ? user.authToken : '';

fetch('http://localhost:4000/announcement',{
method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
headers: {
    'Content-Type': 'application/json',
    'authToken': authToken
  },
})
.then(response => response.json())
.then(data => {
  
  let announcesCards = document.getElementById('announcesCards');

  data.forEach((announce, i) => {
        announcesCards.innerHTML+=`
            <div class="col-md-4">
                <div class="card border mb-4">
                    <div class="card-body">
                        <h5 class="card-title">${announce.title}</h5>
                        <div class="post-details">
                            <a href="javascript:void(0)">${announce.createdAt}</a>
                            
                        </div>
                        <p>${announce.content}</p>
                    </div>
                </div>
            </div>`;
  });
})
.catch(error => {
    console.error(error);
});