fetch('http://localhost:4000/review/accepted',{
method: 'GET', // or 'GET', 'PUT', 'DELETE', etc.
headers: {
    'Content-Type': 'application/json',
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
                                      <h1 class="title">${data[0].review.rate}</h1>
                                      <p>${data[0].review.content}</p>
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
                  <h1 class="title">${review.review.rate}</h1>
                  <p>${review.review.content}</p>
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