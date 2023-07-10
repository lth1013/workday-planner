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

    


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //




  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  timeBlock()
});
