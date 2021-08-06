var hour9 = $("#9");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");

var savebtn = $(".saveBtn");
var date = $("#currentDay");
var today = moment();

function setDate() {
  $("#currentDay").text(today.format("dddd MMM Do, YYYY"));
  UpdateTime();
}
function UpdateTime() {
  var currentTime = moment().format("H");
  for (var i = 9; i <= 17; i++) {
    if (i > currentTime) {
      $("#" + i).addClass(".future");
    } else if (i < currentTime) {
      $("#" + i).addClass(".past");
    } else if (i == currentTime) {
      $("#" + i).addClass(".present");
    }
    $("#t" + i).val(localStorage.getItem("s" + i));
  }
}
setDate();

savebtn.on("click", function () {
  var text = $(this).siblings("textarea").val();
  var btnid = $(this).attr("id");
  localStorage.setItem(btnid, text);
});
