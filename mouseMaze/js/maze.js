var win = true;
$(document).ready(function () {
  $("#maze div.boundary").off();
  $("#end").off();
  $("#start").click(reset);

  var statusText = $("#status").text();

  function red() {
    win = false;
    statusText = "Sorry, you lost";
    $("#status").html(statusText).css("color", "red");
    $(".boundary").each(function () {
      $(this).addClass("youlose");
    });
  }

  function reset() {
    statusText = "Game Started!";
    $("#status").html(statusText).css("color", "green");
    $(".boundary").each(function () {
      $(this).removeClass("youlose");
    });
    $("#maze div.boundary").on("mouseover", red);
    $("#end").on("mouseover", end);
  }
  function end() {
    statusText = "Game End!";
    $("#status").html(statusText).css("color", "blue");
    let currentStatus = win == true ? "You win! :]" : "Sorry, you lost! :[";
    alert(currentStatus);
    $(this).off();
    $("#maze div.boundary").off();
  }
});
