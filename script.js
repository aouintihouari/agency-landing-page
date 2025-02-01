const hamburgerMenu = document.querySelector(".hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburgerMenu.addEventListener("click", () => {
  if (navigation.style.display === "flex") navigation.style.display = "none";
  else navigation.style.display = "flex";
});
