import {RenderCalendar} from "./calendar.js";


const ClickOnPreviousMonth = (Dates) => {
document.querySelector('.previous_month').addEventListener('click', () => {
    Dates.setMonth(Dates.getMonth()-1);
    RenderCalendar(Dates);
})
}
const ClickOnNextMonth = (Dates) => {
document.querySelector('.next_month').addEventListener('click', () => {
    Dates.setMonth(Dates.getMonth()+1);
    RenderCalendar(Dates);
})
}
const ClickOnPreviousYear = (Dates) => {
document.querySelector('.previous_year').addEventListener('click', () => {
    Dates.setFullYear(Dates.getFullYear()-1);
    RenderCalendar(Dates);
})
}
const ClickOnNextYear = (Dates) => {
document.querySelector('.next_year').addEventListener('click', () => {
    Dates.setFullYear(Dates.getFullYear()+1);
    RenderCalendar(Dates);
})
}
export {ClickOnPreviousMonth, ClickOnNextMonth, ClickOnPreviousYear, ClickOnNextYear};