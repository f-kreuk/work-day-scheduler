

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

  

  document.querySelector(".btn").addEventListener("click",console.log("Works"));

  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  const hr9 = document.getElementById('hour-9');
  const hr10 = document.getElementById('hour-10');
  const hr11 = document.getElementById('hour-11');
  const hr12 = document.getElementById('hour-12');
  const hr1 = document.getElementById('hour-13');
  const hr2 = document.getElementById('hour-14');
  const hr3 = document.getElementById('hour-15');
  const hr4 = document.getElementById('hour-16');
  const hr5 = document.getElementById('hour-17');

  const time = new Date();
  let hours = time.getHours();
  console.log(hours);

    function settimeclass() {
      if (hours < 9) {
        hr9.classList.add('future');
        hr10.classList.add('future');
        hr11.classList.add('future');
        hr12.classList.add('future');
        hr1.classList.add('future');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      } else if (hours = 9) {
        hr9.classList.add('present');
        hr10.classList.add('future');
        hr11.classList.add('future');
        hr12.classList.add('future');
        hr1.classList.add('future');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      } else if (hours = 10) {
        hr9.classList.add('past');
        hr10.classList.add('present');
        hr11.classList.add('future');
        hr12.classList.add('future');
        hr1.classList.add('future');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      } else if (hours = 11) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('present');
        hr12.classList.add('future');
        hr1.classList.add('future');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      }else if (hours = 12) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('present');
        hr1.classList.add('future');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      }else if (hours = 13) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('present');
        hr2.classList.add('future');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      }else if (hours = 14) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('past');
        hr2.classList.add('present');
        hr3.classList.add('future');
        hr4.classList.add('future');
        hr5.classList.add('future')
      }else if (hours = 15) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('past');
        hr2.classList.add('past');
        hr3.classList.add('present');
        hr4.classList.add('future');
        hr5.classList.add('future')
      }else if (hours = 16) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('past');
        hr2.classList.add('past');
        hr3.classList.add('past');
        hr4.classList.add('present');
        hr5.classList.add('future')
      }else if (hours = 16) {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('past');
        hr2.classList.add('past');
        hr3.classList.add('past');
        hr4.classList.add('past');
        hr5.classList.add('present')
      } else {
        hr9.classList.add('past');
        hr10.classList.add('past');
        hr11.classList.add('past');
        hr12.classList.add('past');
        hr1.classList.add('past');
        hr2.classList.add('past');
        hr3.classList.add('past');
        hr4.classList.add('past');
        hr5.classList.add('past')
      }
    }

settimeclass();

  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //



  //
  //  TODO: Add code to display the current date in the header of the page.
  //  Below code pulls dayofweek and puts it through an if else statement to convert
  //  that numerical dayofweek into a weekday text variable.

  const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  const d = new Date();
  let dayofweek = weekday[d.getDay()];
  // console.log(dayofweek);



//console.log(weekday);

  //  Below code pulls the month of today's date and converts it into
  //  the text monthofdate variable.

const monthNames = ["January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December"
];

const month = new Date();
let monthofdate = monthNames[month.getMonth()];
//console.log(monthofdate);

  //  Below code pulls the day of today's date, as well as its "st", "nd", "rd", or "th"
  //  endings, i.e. 1st, 2nd, 3rd, 4th.


const dayEnds = ["st","nd","rd","th","th","th","th","th","th","th","th","th","th",
"th","th","th","th","th","th","th","st","nd","rd","th","th","th","th","th","th","th",
"st"];

const date = new Date();
let dayend = dayEnds[date.getDate()-1];
let day = date.getDate();
//console.log(dayend);
//console.log(day);

  //  Below code puts the day, month, date, and dayend into a variable and displays it in
  //  our currentDay header element

const currentDayEl = document.getElementById('currentDay');
// console.log(dayofweek);
currentDayEl.textContent = (dayofweek + ", " + monthofdate + " " + day + dayend);  
  
});