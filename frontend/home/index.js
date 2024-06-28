console.log("hello from script...");

let toggleMode = false;
const toggleList = document.getElementById("toggle-list");
const toggleIcon = document.getElementById("toggle-icon");
const settingsIcon = document.getElementById("setting-icon");

//mode requires
let lightMode = document.getElementById("light-mode");
let darkMode = document.getElementById("dark-mode");
let MainContainer = document.getElementById("main-container");
let presentationContainer = document.getElementById("presentation-container");

const changeToggleMode = () => {
  console.log(toggleMode);
  toggleList.classList.toggle("hidden");
};

toggleIcon.addEventListener("click", () => changeToggleMode());

//? mode change functions

lightMode.onclick = function () {
  toggleList.style.color = "black"
  MainContainer.style.color = "black";
  MainContainer.style.backgroundColor = "white";
  MainContainer.classList.remove("bg-zinc-900");
  presentationContainer.style.backgroundColor = "white";
  settingsIcon.src = "../assests/gear.png";
  console.log("dark mode to white");
};
darkMode.onclick = function () {
  MainContainer.style.color = "white";
  MainContainer.classList.add("bg-zinc-900");
  MainContainer.style.backgroundColor = "black";
  presentationContainer.style.backgroundColor = "black";
  settingsIcon.src = "../assests/gear-white.png";
  console.log("white mode to dark");
};

