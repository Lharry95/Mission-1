// changing img opacity and creating a glow when clicked
const lightBulbImg = document.getElementById("lightBulbImg");
lightBulbImg.addEventListener("click", function () {
  lightBulbImg.style.opacity = "0.1";
  lightBulbImg.style.backgroundColor = "yellow";
  lightBulbImg.style.boxShadow = "0 0 80px 50px yellow";
});

//on mouse removal changing image back to white after opacity changed.

lightBulbImg.addEventListener("mouseout", function () {
  lightBulbImg.style = "white";
});

//colour array changing background colour when you're clicking on the autism header
let colourArray = ["lightpink", "lightblue", "white", "rgb(89, 115, 132)"];
let currentColour = 0;
function changeColour() {
  document.body.style.background = colourArray[currentColour];
  if (currentColour === 3) {
    currentColour = 0;
  } else {
    currentColour++;
  }
}

console.log(colourArray);
