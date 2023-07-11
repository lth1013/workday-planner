// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$('#currentDay').text(dayjs().format('MM/DD/YYYY'))

$(function () {

  function timeBlock() {
    //sets var hour to the current hour 1-24 from dayjs
    var currentHour = dayjs().hour();
    //each function with the time-block class is affected by this function
    $(".time-block").each(function() {
      //turns the id of each block, 9-17,into an int and sets to currentHour var
        var hour = parseInt($(this).attr("id"));
        //compares the now int time of block to the dayjs time
        //if current time is greater than , apply future class, 
        //if current time = timeblock time, present class
        //else must be in past
        if (hour > currentHour) {
            $(this).addClass("future");
        } else if (currentHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }
    })
};
//event listener when savebtn is clicked
$('.saveBtn').on("click", function() {
  //grabs time from hour class of specicic timeBlock when btn is clicked
    var time = $(this).siblings(".hour").text();
    //grabs text from description class for each
    var description = $(this).siblings(".description").val();

    localStorage.setItem(time, description);
});

});
