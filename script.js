var currentMoment = moment().format("dddd, MMM Do YYYY");
$("#currentDay").val(currentMoment);

$(dayPlanner).ready(function () {
  function timeOfDay() {
    var thisMoment = moment().hour();
    $(".input-group").each(function () {
      var thatMoment = parseInt($(this).attr("id").split("hour")[1]);

      if (thatMoment < thisMoment) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      } else if (thatMoment === thisMoment) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      } else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");
      }
    });
  }

  $(".saveEvent").on("click", function () {
    var saveText = $(this).val();
    var saveTime = $(this).val();
    localStorage.setItem(saveText, saveTime);
  });

  $("#event9am .description").val(localStorage.getItem("event9am"));
  $("#event10am .description").val(localStorage.getItem("event10am"));
  $("#event11am .description").val(localStorage.getItem("event11am"));
  $("#event12pm .description").val(localStorage.getItem("event12pm"));
  $("#event1pm .description").val(localStorage.getItem("event1pm"));
  $("#event2pm .description").val(localStorage.getItem("event2pm"));
  $("#event3pm .description").val(localStorage.getItem("event3pm"));
  $("#event4pm .description").val(localStorage.getItem("event4pm"));
  $("#event5pm .description").val(localStorage.getItem("event5pm"));

  timeOfDay();
});
