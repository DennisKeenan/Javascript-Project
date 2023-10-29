const months=[
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const weekdays=[
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const giveaway=document.querySelector('.giveaway');
const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.dealine-format h4');

// Current Date //
let temp_date=new Date();
let temp_year=temp_date.getFullYear();
let temp_month=temp_date.getMonth();
let temp_day=temp_date.getDate();

// Future (Deadline) //
const future_date=new Date(temp_year,temp_month,temp_day+10,11,30,0);
const year=future_date.getFullYear();
const hours=future_date.getHours();
const minute=future_date.getMinutes();

// Month in String //
let month=future_date.getMonth();
month=months[month];

// Days //
const day=weekdays[future_date.getDay()];

// Date //
const date=future_date.getDate();

// Content Giveaway Modification //
giveaway.textContent=`giveaway ends on ${day}, ${date} ${month} ${year} ${hours}:${minute}am`;