function loadReviews() {
  console.log("loadReviews called!");
  const reviewList = document.getElementById("reviews-list");

  for (const review of reviews) {
    createReviewElement(review);
  }
}

function toggleLike() {
  console.log("Like button clicked");
}

function repostReview() {
  console.log("Repost button clicked");
}

const handleReviewSubmit = (event) => {
  event.preventDefault();
  const title = document.getElementById("book-title").value;
  const review = document.getElementById("review-text").value;
  const rating = document.getElementById("rating").value;

  const newReview = {
    id: reviews.length + 1,
    title,
    reviewText: review,
    rating,
    likes: 0,
    reposts: 0,
  };
  createReviewElement(newReview);
};

function createReviewElement(review) {
  console.log(review);

  const container = document.getElementById("reviews-list");

  const reviewElementDiv = document.createElement("div");
  reviewElementDiv.setClass = "review-item";

  reviewElementDiv.innerHTML = `
    <h3>${review.title}</h3>
    <p>${review.reviewText}</p>
    <p>${review.rating}</p>
    <button id="like-${review.id} onclick="toggleLike()" class=>Like (${review.likes})</button>
    <button id="repost-${review.id} onclick="repostReview()">Repost (${review.reposts})</button>
    `;
  container.appendChild(reviewElementDiv);
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log("DOM fully loaded and parsed");
  loadReviews();

  const form = document.getElementById("review-form");

  form.addEventListener("submit", (event) => {
    handleReviewSubmit(event);
  });
});
