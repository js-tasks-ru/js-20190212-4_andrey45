'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let headsOfTable = document.querySelector("thead tr").children;
    let nameKey = 0;
    let ageKey = 0;
    let genderKey = 0;
    let statusKey = 0;
    for (let i = 0; i<headsOfTable.length; i++) {
        if (headsOfTable[i].innerHTML === "Name") {
            nameKey = i;
        } else if (headsOfTable[i].innerHTML === "Age") {
            ageKey = i;
        } else if (headsOfTable[i].innerHTML === "Gender") {
            genderKey = i;
        } else if (headsOfTable[i].innerHTML === "Status") {
            statusKey = i;
        }

    }
    console.log(statusKey);
}