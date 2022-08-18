
let defaultColumnCount = 7;

const renderTable = (days, weekdays, columnCount = defaultColumnCount) => {
    document.querySelector('.days').innerHTML = days;
    document.querySelector('.weekdays').innerHTML = weekdays;
    document.querySelector('.days').style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
    document.querySelector('.weekdays').style.gridTemplateColumns = `repeat(${columnCount}, 1fr)`;
}

const addColumn = () => {
    defaultColumnCount++;
}

const removeColumn = () => {
    defaultColumnCount--;
}

export {renderTable, addColumn, removeColumn};