const button = document.querySelector(".button");
const buttonRect = button.getBoundingClientRect();
const chevron = document.querySelector(".chevron");
const chevronRect = chevron.getBoundingClientRect();
const dropdown = document.querySelector(".dropdown");
const menuTop = chevronRect.top - buttonRect.top;
const menuRight = buttonRect.right - chevronRect.right;
const menu = document.querySelector(".menu");

menu.style.top = `${menuTop}px`;
menu.style.right = `${menuRight}px`;

button.addEventListener("click", () => {
  if (dropdown.classList.contains("open")) {
    menu.style.top = `${menuTop}px`;
    menu.style.right = `${menuRight}px`;
  } else {
    menu.style.top = `${button.clientHeight + 10}px`;
    menu.style.right = `${0}px`;
  }

  dropdown.classList.toggle("open");
});
