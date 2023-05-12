import Swal from "sweetalert2";

export const UserFeedbackModal = () => {
  Swal.fire({
    template: "#user-feedback-modal",
    showConfirmButton: false,
    width: "492px",
    padding: 0,
    customClass: {
      container: "user-feedback-modal",
    },
    background: "var(--background-color)",
    color: "var(--on-background-color)",
    showCloseButton: true,
    allowEnterKey: false,
    closeButtonHtml: '<img src="/assets/icons/close-icon.svg" alt="X" />',
  });
};
