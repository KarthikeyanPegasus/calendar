
let defaultColumnCount = 7;

const renderTable = (columnCount = defaultColumnCount,  days, weekdays) => {
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