// changing img opacity and creating a glow when clicked
const lightBulbImg = document.getElementById("lightBulbImg");
lightBulbImg.addEventListener("click", function () {
  lightBulbImg.style.opacity = "0.2";
  lightBulbImg.style.backgroundColor = "rgba(219, 228, 98, 0.2)";
  lightBulbImg.style.boxShadow = "0 0 100px 80px yellow";
});

//on mouse removal changing image back to white after opacity changed.

lightBulbImg.addEventListener("mouseout", function () {
  lightBulbImg.style = "white";
});

//colour array changing background colour when you're clicking on the autism header
let colourArray = [
  "lightpink",
  "lightblue",
  "white",
  "black",
  "rgb(89, 115, 132)",
];
let currentColour = 0;
function changeColour() {
  document.body.style.background = colourArray[currentColour];
  if (currentColour === 4) {
    currentColour = 0;
  } else {
    currentColour++;
  }
}

console.log(colourArray);

/* transition from current page to nextMission2Page */
// const nextPageTransition = document.querySelector(".arrow-down");
// nextPageTransition.style.opacity = 1;
// nextPageTransition.style.transition = "opacity 2s ease-in";
// nextPageTransitionstyle.opacity = 1;
