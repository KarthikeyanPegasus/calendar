import {ClickOnPreviousMonth, ClickOnNextMonth, ClickOnPreviousYear, ClickOnNextYear} from "./interactions.js";
import { renderTable } from "./tables.js";
import { assignSelectedMonth, assignSelectedYear } from "./topbar.js";
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

const RenderCalendar = (Dates) => {
    let lastDate = new Date(Dates.getFullYear(), Dates.getMonth()+1, 0).getDate();
    let lastDay = new Date(Dates.getFullYear(), Dates.getMonth()+1, 0).getDay();
    let firstday = new Date(Dates.getFullYear(), Dates.getMonth(), 1).getDay();
    let previousMonthLastDate = new Date(Dates.getFullYear(), Dates.getMonth(), 0).getDate();
    let curMonth = Dates.getMonth();
    let curYear = Dates.getFullYear();
    let today = Dates.getDate();
    let weekdays = calcweekdays();
    let previousMonthDays = calcPrevMonthDaysInCurrentMonth(previousMonthLastDate, firstday);
    let nextMonthDays = calcNextMonthDaysInCurrentMonth(lastDay);
    let currentMonthdays = calcCurrentMonthDays(lastDate,today);
    let days = previousMonthDays + currentMonthdays + nextMonthDays; 
   
    renderBasicStructure();
    assignSelectedMonth(Months[curMonth]);
    assignSelectedYear(curYear);
    renderTable(7, days, weekdays);
    renderCalenderInteractions(Dates);
}

const renderBasicStructure= () => {
    let calendar = `
    <div class="weekdays"></div>
    <div class="days"></div>
    `;
    document.querySelector('.calendar').innerHTML += calendar;
}
const calcweekdays = () => {
    let weekdays = "";
    for (let weekday = 0; weekday < 7; weekday++) {
        weekdays+= `<p class="weekdays">${Days[weekday]}</p>`;
        }
    return weekdays;
}

const calcPrevMonthDaysInCurrentMonth = (previousMonthLastDate, firstday) =>{
    let days = ""; 
    for (let previousMonthDays = previousMonthLastDate-firstday+1; previousMonthDays <= previousMonthLastDate; previousMonthDays++) {
        days += `<p class="previous_days">${previousMonthDays}</p>`;
    }
    return days;
}

const calcNextMonthDaysInCurrentMonth = (lastDay) =>{
    let days = "";
    for (let nextMonthdays = 1; nextMonthdays < 7-lastDay; nextMonthdays++) {
        days += `<p class="next_days">${nextMonthdays}</p>`;
    }
    return days;
}

const calcCurrentMonthDays= (lastDate, today) =>{
    let days = "";
    for (let currentMonthdays = 0; currentMonthdays  < lastDate; currentMonthdays ++) {
        if (currentMonthdays +1 === today) {
            days += `<p class="today daysOfThisMonth" id="t+${currentMonthdays }" >${currentMonthdays +1}</p>`;
        }
        else{
            days += `<p  class=daysOfThisMonth" id="d+${currentMonthdays }">${currentMonthdays +1}</p>`;
        }
    }
    return days;
}

const renderCalenderInteractions = (Dates) => {
ClickOnPreviousMonth(Dates);
ClickOnNextMonth(Dates); 
ClickOnPreviousYear(Dates); 
ClickOnNextYear(Dates);
}

export {RenderCalendar};