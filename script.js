burger = document.querySelector(".burger");
navList = document.querySelector(".navList");

burger.addEventListener("click", () => {
  navList.classList.toggle("hidden");
});
