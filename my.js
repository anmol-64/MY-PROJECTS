let modeBtn = document.querySelector("#mode");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    currMode = "light";
    body.classList.add("dark");
    body.classList.remove("light");
  }
  console.log(currMode);
});
