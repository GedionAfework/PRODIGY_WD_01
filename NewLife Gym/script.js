document.addEventListener("DOMContentLoaded", () => {
  const content = document.querySelector(".content");
  let index = 0;

  function slide() {
    index = (index + 1) % content.children.length;
    content.style.transform = `translateX(-${index * 100}%)`;
  }

  setInterval(slide, 3000);
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const navUl = document.querySelector(".nav-ul");

  hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
  });
});
