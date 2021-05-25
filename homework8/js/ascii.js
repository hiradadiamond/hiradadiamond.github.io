 window.onload = function () {
  "use strict";
  document.getElementById("start").onclick = startAnimation;
  document.getElementById("stop").onclick = stopAnimation;
  document.getElementById("animation").onchange = animationChange;
  document.getElementById("fontsize").onchange = changeFontSizeFunc;
  document.getElementById("speed").onchange = setSpeedFunc;
};
var textBox = document.getElementById("textBox");
var animationList = ["EXERCISE", "JUGGLER", "BIKE", "DIVE"];
var delaytimer = null;
var curFrame;
var frames = "";
var targetDelay = 250;

function stopAnimation() {
  document.getElementById("stop").disabled = true;
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
  clearInterval(delaytimer);
  delaytimer = null;
  document.getElementById("textBox").value = frames[0];
}
function startAnimation() {
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("animation").disabled = true;
  var animationSelect = document.getElementById("animation").value;
  var animationStr = ANIMATIONS[animationSelect];
  frames = animationStr.split("=====\n");
  console.log(frames);
  curFrame = 1;
  if (delaytimer == null) {
    delaytimer = setInterval(preSetAnimation, targetDelay);
  } else {
    clearInterval(delaytimer);
    delaytimer = null;
  }
}
function setSpeedFunc() {
  if (this.checked) {
    targetDelay = 50;
  } else {
    targetDelay = 250;
  }
}
function changeFontSizeFunc() {
  "use strict";
  var selectFontSize = document.getElementById("fontsize").value;
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
  var textBox = document.getElementById("textBox");
  switch (selectAnimation) {
    case "Juggler":
      var totalFrame = JUGGLER.split("=====\n");
      textBox.value = totalFrame[0];
      break;
    case "Exercise":
      var totalFrame = EXERCISE.split("=====\n");
      textBox.value = totalFrame[0];
      break;
    case "Bike":
      var totalFrame = BIKE.split("=====\n");
      textBox.value = totalFrame[0];
      break;
    case "Dive":
      var totalFrame = DIVE.split("=====\n");
      textBox.value = totalFrame[0];
      break;
    default:
      textBox.value = "NOT SELECTED! TRY AGAIN";
      break;
  }
}

function preSetAnimation() {
  if (curFrame < frames.length) {
    document.getElementById("textBox").value = frames[curFrame++];
  } else {
    curFrame = 0;
  }
}
