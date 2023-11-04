
const shareButton = document.querySelector(".share-icon");
const activeDiv = document.querySelector(".active")
const iconImage = document.querySelector("icon-img")

shareButton.addEventListener("click", () => {
  activeDiv.toggleAttribute("hidden");

});