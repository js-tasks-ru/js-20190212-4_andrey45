'use strict';

/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let doc = document;
    let headsOfTable = doc.querySelector("thead tr").children;
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
    let tableBody = doc.querySelector("tbody").children;
    console.log(tableBody);
    for (let j = 0; j<tableBody.length; j++) {
        if (tableBody[j].cells[ageKey].innerHTML < 18) {
            tableBody[j].style.textDecoration = "line-through";
        }
        if (tableBody[j].cells[genderKey].innerHTML === "m") {
            tableBody[j].classList.add("male");
        } else if (tableBody[j].cells[genderKey].innerHTML === "f") {
            tableBody[j].classList.add("female");
        }
        if (tableBody[j].cells[statusKey].getAttribute("data-available") === "true") {
            tableBody[j].classList.add("available");
        } else if (tableBody[j].cells[statusKey].getAttribute("data-available") === "false") {
            tableBody[j].classList.add("unavailable");
        } else if (tableBody[j].cells[statusKey].getAttribute("data-available") === null) {
            tableBody[j].setAttribute("hidden", "");
        }
    }


}