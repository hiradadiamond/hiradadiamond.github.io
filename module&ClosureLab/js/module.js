var rudyTimer = (function () {
  "use strict";
  var timer = null;
  var rudy = function () {
    document.getElementById("output").innerText += "Rudy!";
  };
  function delayMsg2() {
    if (timer == null) {
      timer = setInterval(rudy, 1000);
    } else {
      clearInterval(timer);
      timer = null;
    }
  }
  return {
    timerPlay: function () {
      delayMsg2();
    },
  };
})();
