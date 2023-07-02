// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?


  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?


  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  //
  //  TODO: Add code to display the current date in the header of the page.
  //  Below code pulls dayofweek and puts it through an if else statement to convert
  //  that numerical dayofweek into a weekday text variable.

let dayofweek = dayjs().day();
var weekday;

function weekday () {
    if (dayofweek < 1) {
      weekday = "Sunday"
      } else if (dayofweek < 2) {
          let weekday = "Monday"
      } else if (dayofweek < 3) {
          let weekday = "Tuesday"
      } else if (dayofweek < 4) {
          let weekday = "Wednesday"
      } else if (dayofweek < 5) {
          let weekday = "Thursday"
      } else if (dayofweek < 6) {
          let weekday = "Friday"
      } else {
          let weekday = "Saturday"
      }
}

weekday();
console.log(weekday);

  //  Below code pulls the month of today's date and converts it into
  //  the text monthofdate variable.

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const month = new Date();
let monthofdate = monthNames[month.getMonth()];
console.log(monthofdate);

  //  Below code pulls the day of today's date, as well as its "st", "nd", "rd", or "th"
  //  endings, i.e. 1st, 2nd, 3rd, 4th.


const dayEnds = ["st","nd","rd","th","th","th","th","th","th","th","th","th","th",
"th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th",
"st"];

const date = new Date();
let dayend = dayEnds[date.getDate()-1];
let day = date.getDate();
console.log(dayend);
console.log(day);

  //  Below code puts the day, month, date, and dayend into a variable and displays it in
  //  our currentDay header element

const currentDayEl = document.getElementById('currentDay');
currentDayEl.textContent = (weekday + ", " + monthofdate + " " + day + dayend);  
  
});

