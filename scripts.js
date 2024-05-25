// Get the menuList element by its id "menuList" and store it in the variable menuList. ✅
let menuList = document.getElementById("menuList");

// Set the initial maximum height of the menuList element to "0px". ✅
menuList.style.maxHeight = "0px";

// Create a function named toggleMenu: ✅
function toggleMenu() {
  // Check if the current maximum height of the menuList element is "0px": ✅
  if (menuList.style.maxHeight === "0px") {
    // If true, set the maximum height of the menuList element to "300px" to expand the menu. ✅
    menuList.style.maxHeight = "300px";
  } else {
    // If false, set the maximum height of the menuList element back to "0px" to collapse the menu. ✅
    menuList.style.maxHeight = "0px";
  }
}
