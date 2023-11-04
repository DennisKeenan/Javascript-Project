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
const items=document.querySelectorAll('.deadline-format h4');

// Current Date //
let temp_date=new Date();
let temp_year=temp_date.getFullYear();
let temp_month=temp_date.getMonth();
let temp_day=temp_date.getDate();

// Future (Deadline) //
// const future_date=new Date(temp_year,temp_month,temp_day+10,11,30,0);
const future_date=new Date(temp_year,temp_month,temp_day,10,18,0);
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

// Future Time (Countdown) //
const future_time=future_date.getTime();
function getRemaining(){
  const today=new Date().getTime();
  const remainding=future_time-today;
  // console.log(remainding);

  // Countdown Script //
  const one_day=24*60*60*1000;
  const one_hour=60*60*1000;
  const one_minute=60*1000;

  let r_days=remainding/one_day;
  r_days=Math.floor(r_days);
  let r_hours=Math.floor((remainding%one_day)/one_hour);
  let r_minutes=Math.floor((remainding%one_hour)/one_minute);
  let r_seconds=Math.floor((remainding%one_minute)/1000);
  const value=[r_days,r_hours,r_minutes,r_seconds];
  function format(item){
    if(item<10){
      return(item=`0${item}`);
    }
    return(item);
  }
  items.forEach(function(item,index){
    item.innerHTML=format(value[index]);
  });
  if (remainding<0){
    deadline.innerHTML=`<h4 class="expired">Sorry this giveaway has expired</h4>`;
  }
}
setInterval(getRemaining,1000);
getRemaining();

