const toggleList = document.getElementById("toggle-list");
const toggleIcon = document.getElementById("toggle-icon");
const settingsIcon = document.getElementById("setting-icon");

const changeToggleMode = () => {
  console.log("clicked");
  toggleList.classList.toggle("hidden");

};

toggleIcon.addEventListener("click", () => changeToggleMode());

console.log("test global functions");
