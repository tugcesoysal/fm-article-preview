const shareButton = document.querySelector(".share-icon");
const activeDiv = document.querySelector(".active");

shareButton.addEventListener("click", () => {
  activeDiv.classList.toggle("hidden");
});
