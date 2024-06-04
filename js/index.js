const box = document.querySelector(".Sidebar");
const logo = document.querySelector(".fa-bars");
const texts = document.querySelectorAll(".u-text");
const textHidden = document.querySelectorAll(".u-hidden-text");
const btn = document.querySelectorAll(".menu-btn");
const category = document.querySelector("#category");
const videos = document.querySelector(".videos");

logo.addEventListener("click", () => {
  box.classList.toggle("active");
  videos.classList.toggle("on");
  category.classList.toggle("on__witdh");
  texts.forEach((text) => {
    return text.classList.toggle("hidden");
  });
  textHidden.forEach((text) => {
    return text.classList.toggle("hidden");
  });
  btn.forEach((btn) => {
    return btn.classList.toggle("on_active");
  });
});