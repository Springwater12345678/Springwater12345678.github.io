const menu = document.getElementById("menu");
const menuWrapper = document.getElementById("menu_wrapper");

menu.addEventListener("click", function() {
  menuWrapper.style.display = "flex";
});

menuWrapper.addEventListener("click", function() {
  menuWrapper.style.display = "none";
});
