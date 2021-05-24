window.onload = function () {
    "use strict";
  document.getElementById("start").onclick = startFunc;
  document.getElementById("stop").onclick = startFunc;
  document.getElementById("animation").onchange = animationChange;
  document.getElementById("fontsize").onchange = changeFontSizeFunc;
  document.getElementById("speed").onclick = setSpeedFunc;
};
var delaytimer = 250;
function startFunc() {
   var animationSelect = document.getElementById("animation").value;
   console.log(animationSelect);
   var textBox = document.getElementById("textBox").value;
   console.log(textBox.value.indexOf('\n'));
 
}
function changeFontSizeFunc() {
    "use strict";
  var selectFontSize = document.getElementById("fontsize").value;
  console.log(selectFontSize);
  var textBox = document.getElementById("textBox");
  switch (selectFontSize) {
    case "tiny":
      textBox.style.fontSize = "7pt";
      break;
    case "small":
      textBox.style.fontSize = "10pt";
      break;
    case "medium":
      textBox.style.fontSize = "12pt";
      break;
    case "large":
      textBox.style.fontSize = "16pt";
      break;
    case "extralarge":
      textBox.style.fontSize = "24pt";
      break;
    case "xxl":
      textBox.style.fontSize = "32pt";
      break;
    default:
      textBox.value = "NOT SELECTED! TRY AGAIN";
      break;
  }
}
function animationChange() {
    "use strict";
  var selectAnimation = document.getElementById("animation").value;
  console.log(selectAnimation);
  var textBox = document.getElementById("textBox");
  switch (selectAnimation) {
    case "Juggler":
      textBox.value = JUGGLER;
      break;
    case "Exercise":
      textBox.value = EXERCISE;
      break;
    case "Bike":
      textBox.value = BIKE;
      break;
    case "Dive":
      textBox.value = DIVE;
      break;
    default:
      textBox.value = "NOT SELECTED! TRY AGAIN";
      break;
  }
}

function setSpeedFunc(){
    delaytimer = 50;
}
function preSetAnimation(){
    var textBox = document.getElementById("textBox").value;
    textBox.style.width += 40 + "px";
    alert(textBox.style.width)

}
