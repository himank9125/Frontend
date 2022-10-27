let showModal = document.querySelectorAll(".show-modal");
let modal = document.querySelector(".modal");
let overlay = document.querySelector(".overlay");
let close = document.querySelector(".close-modal");

function displayModel() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function hideModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

// showModal.addEventListener("click", displayModel);

for (let i = 0; i < showModal.length; i++) {
  showModal[i].addEventListener("click", displayModel);
}

close.addEventListener("click", hideModal);
overlay.addEventListener("click", hideModal);

document.addEventListener("keyup", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    hideModal();
  }
});
