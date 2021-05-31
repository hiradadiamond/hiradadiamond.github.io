"use strict";
var row = 3;
var col = 3;
const WIDTH = 100;
const HEIGHT = 100;
$(document).ready(function () {
  //<-- first initialize puzzle in background--->
  var init = function () {
    var xPos = function (num) {
      return (num % 4) * 100;
    };
    var yPos = function (num) {
      return Math.floor(num / 4) * 100;
    };
    $("#puzzlearea div").each(function (idx) {
      var x = xPos(idx);
      var y = yPos(idx);
      console.log(x);
      $(this).addClass("puzzlepiece");
      $(this).css({
        left: x + "px",
        top: y + "px",
        "background-image": "url(images/background.jpg)",
        "background-position": -x + "px " + -y + "px",
      });
      $(this).x = x;
      $(this).y = y;
    });
  };
  init();

  // <!--Shuffle  Algorithim -->
  $("#shufflebutton").click(function () {
    $("#puzzlearea div").each(function (idx) {
      if (!topLeft.contains(idx)) {
        console.log("idx" + this.x);
      } else {
        console.log("this" + this.x);
      }
    });
  });

  //<---moveElemets check and addhover--->
  $("#puzzlearea div").hover(function () {
    $(this).addClass("movablepiece");
    var div = $(this);
    $(this).click(function () {
      var canMove = isMovable(div);
      console.log(canMove);
      if (canMove) {
        var curElemPosition = $(this).position();
        var x = curElemPosition.left;
        var y = curElemPosition.top;
        console.log(x + "x" + "y" + y);
        var tempX = x / 100;
        var tempY = y / 100;
        var idvalue = "square_" + tempX + tempY;
        $(this).css({
          top: col * HEIGHT,
          left: row * WIDTH,
        });
        row = tempX;
        col = tempY;
        $(elem).removeAttr("id");
        $(elem).attr("id", idvalue);
      } 
      else {
        alert("sorry");
        $(this).off(click);
      }
    });
  });
  //<!--- isMovable Div ---->
  var isMovable = function (elem) {
    var emptySquareXpos = row * WIDTH;
    var emptySquareYpos = col * HEIGHT;

    var curElemPosition = $(elem).position();
    var x = curElemPosition.left;
    var y = curElemPosition.top;

    // movable position left right top bottom
    var leftPos = x + 100;
    var upTopPos = y - 100;
    var rightPos = x - 100;
    var downPos = y + 100;

    var leftPOSCHECK =
      leftPos == emptySquareXpos && y == emptySquareYpos ? true : false;
    var rightPOSCHECK =
      rightPos == emptySquareXpos && y == emptySquareYpos ? true : false;
    var topPOSCHECK =
      upTopPos == emptySquareYpos && x == emptySquareXpos ? true : false;
    var downPOSCHECK =
      downPos == emptySquareYpos && x == emptySquareXpos ? true : false;
    if (leftPOSCHECK || rightPOSCHECK || topPOSCHECK || downPOSCHECK) {
      return true;
    } else {
      return false;
    }
  };
});
