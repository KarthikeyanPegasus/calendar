const renderTopBarBasicStructure = () => {
    let topBar = 
    `
    <div class="topbar">               
        <div class="icon">
            <img class= "previous_month" src="assets/left_dark.png" alt="">
            <div class="selected_month"></div>
            <img class="next_month" src="assets/right_dark.png" alt="">
        </div>             
        <div class="icon">
            <img class= "previous_year" src="assets/left_dark.png" alt="">
            <div class="selected_year"></div>
            <img class="next_year" src="assets/right_dark.png" alt="">
        </div>
    </div>
    `;
        document.querySelector('.calendar').innerHTML += topBar;
    }

const assignSelectedMonth = (month) => {
    document.querySelector('.selected_month').innerHTML = month;
}
const assignSelectedYear = (year) => {
    document.querySelector('.selected_year').innerHTML = year;
}
export {renderTopBarBasicStructure,assignSelectedMonth,assignSelectedYear};