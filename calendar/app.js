const Dates = new Date();
const Months = [
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
    'December'
];

const Days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const selectDate = (selectedDate,month,year) => {
let today = new Date();
today.setDate(selectedDate);
today.setMonth(month);
today.setFullYear(year);

document.querySelector('.left .selected #selected_date').innerHTML = selectedDate+'/'+(month+1)+'/'+year;
document.querySelector('.left .selected #selected_day').innerHTML = Days[today.getDay()];
}

const renderCalendar = () => {
    let lastDate = new Date(Dates.getFullYear(), Dates.getMonth()+1, 0).getDate();
    let lastDay = new Date(Dates.getFullYear(), Dates.getMonth()+1, 0).getDay();
    let firstday = new Date(Dates.getFullYear(), Dates.getMonth(), 1).getDay();
    let previousMonthLastDate = new Date(Dates.getFullYear(), Dates.getMonth(), 0).getDate();
    
    let curMonth = Dates.getMonth();
    let curYear = Dates.getFullYear();
    let today = Dates.getDate();
    let curDay = Dates.getDay();
    let days = "";
    
    for (let i = previousMonthLastDate-firstday+1; i <= previousMonthLastDate; i++) {
        days += `<p class="previous_days">${i}</p>`;
        document.querySelector('.days').innerHTML = days;
    }
   
    for (let i = 0; i < lastDate; i++) {
        if (i+1 === today) {
            days += `<p class="today" onclick="selectDate(${i+1},${curMonth},${curYear})">${i+1}</p>`;
        }
        else{
            days += `<p  onclick="selectDate(${i+1},${curMonth},${curYear})">${i+1}</p>`;
        }
    document.querySelector('.days').innerHTML = days;
    }
    for (let i = 1; i < 7-lastDay; i++) {
        days += `<p class="next_days">${i}</p>`;
        document.querySelector('.days').innerHTML = days;
    }

document.querySelector('.right .topbar .selected_month').innerHTML = Months[curMonth];
document.querySelector('.right .topbar .selected_year').innerHTML = curYear;
document.querySelector('.left .selected #selected_date').innerHTML = today+'/'+(curMonth+1)+'/'+curYear;
document.querySelector('.left .selected #selected_day').innerHTML = Days[curDay];
}



document.querySelector('.previous_day').addEventListener('click', () => {
    Dates.setDate(Dates.getDate()-1);
    renderCalendar();
})
document.querySelector('.next_day').addEventListener('click', () => {
    Dates.setDate(Dates.getDate()+1);
    renderCalendar();
})
document.querySelector('.previous_month').addEventListener('click', () => {
    Dates.setMonth(Dates.getMonth()-1);
    renderCalendar();
})
document.querySelector('.next_month').addEventListener('click', () => {
    Dates.setMonth(Dates.getMonth()+1);
    renderCalendar();
})
document.querySelector('.previous_year').addEventListener('click', () => {
    Dates.setFullYear(Dates.getFullYear()-1);
    renderCalendar();
})
document.querySelector('.next_year').addEventListener('click', () => {
    Dates.setFullYear(Dates.getFullYear()+1);
    renderCalendar();
})

renderCalendar();
