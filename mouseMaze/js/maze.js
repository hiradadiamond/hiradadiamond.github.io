var win = true;

$(document).ready(function () {
  $("p").append("Yes!!");
  $("#maze div.boundary").mouseover(lose);
  $("#end").mouseover(end);
  $("#start").click(reset);

  function lose(){
    $("#boundary1").addClass("youlose");
    $("#boundary2").addClass("youlose");
    $("#boundary3").addClass("youlose");
    $("#boundary4").addClass("youlose");
    $("#boundary5").addClass("youlose");
    alert(" Sorry, you lost :[");
  }
  function reset() {
    $("#boundary1").removeClass("youlose");
    $("#boundary2").removeClass("youlose");
    $("#boundary3").removeClass("youlose");
    $("#boundary4").removeClass("youlose");
    $("#boundary5").removeClass("youlose");
  }
  function end() {
    alert("You Win!! :]");
  }
});
