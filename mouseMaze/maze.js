var win = true;

$(document).ready(function () {
  $("#maze div.boundary").mouseover(red);
  $("#end").mouseover(end);
  $("#start").click(reset);

  function red(){
    win = false;
    $("#boundary1").addClass("youlose");
    $("#boundary2").addClass("youlose");
    $("#boundary3").addClass("youlose");
    $("#boundary4").addClass("youlose");
    $("#boundary5").addClass("youlose");  
  }
  function reset() {
    $("#boundary1").removeClass("youlose");
    $("#boundary2").removeClass("youlose");
    $("#boundary3").removeClass("youlose");
    $("#boundary4").removeClass("youlose");
    $("#boundary5").removeClass("youlose");
  }
  function end() {
    if(win) {
      alert("You Win!! :]");
    } 
    else{
      alert("sorry, you lost!! :[");
    } 
  }
});
