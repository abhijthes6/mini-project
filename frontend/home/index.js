console.log("test");

let toggleMode = false;
const toggleList = document.getElementById("toggle-list");
const toggleIcon = document.getElementById("toggle-icon");

//mode requires
let lightMode = document.getElementById("light-mode");
let darkMode = document.getElementById("dark-mode");
let MainContainer = document.getElementById("main-container");
let presentationContainer = document.getElementById("presentation-container");

const changeToggleMode = () => {
  console.log(toggleMode);
  toggleList.classList.toggle("hidden");
  toggleMode = !toggleMode;
  //   if (!toggleMode) toggleList.style.display = "hidden";
};


lightMode.onclick = function(){
    MainContainer.style.color = "black"
    MainContainer.style.backgroundColor = "white"
    MainContainer.classList.remove("bg-zinc-900")
    presentationContainer.style.backgroundColor = "whiite"
}
darkMode.onclick = function(){
    MainContainer.style.color = "white"
    MainContainer.classList.add("bg-zinc-900")
    MainContainer.style.backgroundColor = "black"
    presentationContainer.style.backgroundColor  = "blck"
    
}


toggleIcon.addEventListener("click", () => changeToggleMode());
