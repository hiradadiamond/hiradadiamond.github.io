$(function () {
  $("#submit").click(function () {
    var inputKey = $("#searchkey").val();
    $.ajax({
      url: "/post_data",
      method: "POST",
      data: {
        searchkey: inputKey,
      },
      success: function (res) {
        $("#list").empty("#contents");
        $("#list").append("<ul id='contents'");
        $.each(res.def, function (index, value) {
          $("#list").append("<li>" + value.definition + "</li>");
        });
        $("#list").append("</ul>");
      },
      error: function (res) {
        alert(res);
      },
    });
  });
});
