export const UserFeedbackComponent = () => {
  const UserFeedbackComponent = document.querySelector(
    ".user-feedback-component"
  );
  const allRatesTiles = UserFeedbackComponent.querySelectorAll(
    ".user-feedback-component__single-rate-tile"
  );

  let currentRating;

  const confirmButton = UserFeedbackComponent.querySelector(
    ".user-feedback-component__confirm-button"
  );

  addListenersToAllRatesTiles();

  function addListenersToAllRatesTiles() {
    allRatesTiles.forEach((singleRateTile) => {
      singleRateTile.addEventListener("click", () => {
        singleRateTile.toggleAttribute("data-selected");
        if (singleRateTile.hasAttribute("data-selected")) {
          currentRating = singleRateTile.getAttribute("data-rate");
        } else {
          currentRating = null;
        }

        console.log(`current rating: ${currentRating}`);

        afterRatingChanged(singleRateTile);
      });
    });
  }

  function afterRatingChanged(singleRateTile) {
    disselectOtherRatings(singleRateTile);
    setProperButtonState(currentRating);
  }

  function disselectOtherRatings(clickedTile) {
    allRatesTiles.forEach((singleRateTile) => {
      if (singleRateTile != clickedTile) {
        singleRateTile.removeAttribute("data-selected");
      }
    });
  }

  function setProperButtonState() {
    if (currentRating) {
      confirmButton.removeAttribute("disabled");
    } else {
      confirmButton.setAttribute("disabled", true);
    }
  }

  confirmButton.addEventListener("click", () => {
    confirmButton.setAttribute("data-loading", 1);
  });
};
