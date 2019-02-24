'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

/*
clearString
Чистим строку, переводим в массив для поиска элементов
 */
function cleanString (str) {
    let string = str.split(" ");
    let newString = string.join();
    let clrString = newString.split(",");
    return clrString;
}

/*
getMinMax
Основная функция для поиска минимального и максимального элемента
*/
function getMinMax(str) {
    let newStr = cleanString(str);
    let minNumber = parseFloat(newStr[0]);
    let maxNumber = parseFloat(newStr[0]);
    for (let key in newStr) {
        if (parseFloat(newStr[key]) > maxNumber) {
            maxNumber = parseFloat(newStr[key]);
        }
        if (parseFloat(newStr[key]) < minNumber) {
            minNumber = parseFloat(newStr[key]);
        }
    }
    let minmaxObj = {};
    minmaxObj.min = minNumber;
    minmaxObj.max = maxNumber;
    return minmaxObj;
}

// console.log(getMinMax(inputData));

