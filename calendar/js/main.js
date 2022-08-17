import { RenderCalendar } from "./calendar.js";
import { renderTopBarBasicStructure } from "./topbar.js";
const initCalendar = () => {
    renderTopBarBasicStructure();
    renderFullCalendar();
}
const renderFullCalendar = () => {
    let date = new Date();
    RenderCalendar(date);
}

initCalendar();
