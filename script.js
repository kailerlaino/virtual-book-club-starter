function loadReviews() {
  console.log("loadReviews called!");
  const reviewList = document.getElementById('reviews-list');

  for (const review of reviews) {
    const reviewElement = createReviewElement(review);
    reviewList.appendChild(reviewElement);
  }
}

function toggleLike() {
  console.log("Like button clicked");
}

function repostReview() {
  console.log("Repost button clicked");
}

const handleReviewSubmit = () => {
  console.log("handleReviewSubmit called!");
};

function createReviewElement(review) {
  console.log(review);

const container = document.getElementById("reviews-list");

  const reviewElementDiv = document.createElement("div");
  reviewElementDiv.setClass = ("review-item");

  reviewElementDiv.innerHTML = `
    <h3>${review.title}</h3>
    <p>${review.reviewText}</p>
    <p>${review.reviewRating}</p>
    <button id="like-${review.id} onclick="toggleLike()" class=>Like</button>
    <button id="repost-${review.id} onclick="repostReview()">Repost</button>
    `;
    return reviewElementDiv;
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  loadReviews();

  const form = document.getElementById("review-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleReviewSubmit();
  });
});
