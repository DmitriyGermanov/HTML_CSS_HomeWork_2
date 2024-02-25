document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".main__menu__icon");
  const burgerMenu = document.querySelector(".burger__menu");

  let timeoutId;

  function showMenu() {
    clearTimeout(timeoutId);
    burgerMenu.classList.add("active");
  }

  function hideMenu() {
    burgerMenu.classList.remove("active");
  }
  menuIcon.addEventListener("mouseenter", showMenu);
  burgerMenu.addEventListener("mouseenter", showMenu);

  menuIcon.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(hideMenu, 2000);
  });
  burgerMenu.addEventListener("mouseleave", function () {
    timeoutId = setTimeout(hideMenu, 2000);
  });
});
