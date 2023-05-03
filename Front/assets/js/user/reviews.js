fetch('http://localhost:4000/review/accepted',{
method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
headers: {
    'Content-Type': 'application/json',
    'authToken': '2fc5097129700d9c8137'
  },
})
.then(response => response.json())
.then(data => {
  
  let reviewsCards = document.getElementById('reviewsCards');
  let reviewsController = document.getElementById('reviewsController');

  reviewsCards.innerHTML = `<div class="carousel-item active">
                              <div class="card testmonial-card border">
                                  <div class="card-body">
                                      <img src="assets/imgs/avatar/${data[0].user.avatar}">
                                      <p>${data[0].review.review}</p>
                                      <h1 class="title">${data[0].user.fullName}</h1>
                                  </div>
                              </div>
                            </div>`;
  reviewsController.innerHTML = `<li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>`;

  data.forEach((review, i) => {
    if (i > 0) {
      reviewsCards.innerHTML+=`
        <div class="carousel-item">
          <div class="card testmonial-card border">
              <div class="card-body">
                  <img src="assets/imgs/avatar/${review.user.avatar}">
                  <p>${review.review.review}</p>
                  <h1 class="title">${review.user.fullName}</h1>
              </div>
          </div>
        </div> `;
      reviewsController.innerHTML += `<li data-target="#carouselExampleIndicators" data-slide-to="${i}"></li>`;
    }
  });
})
.catch(error => {
    console.error(error);
});