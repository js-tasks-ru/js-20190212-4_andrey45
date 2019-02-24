'use strict';

/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */

function cleanString (str) {
    var newString = str.split(" ");
    return newString;
}

function getMinMax(str) {
    let minNumber = parseFloat(str[0]);
    let maxNumber = parseFloat(str[0]);
    for (let key in str) {
        if (parseFloat(str[key]) > maxNumber) {
            maxNumber = parseFloat(str[key]);
        }
        if (parseFloat(str[key]) < minNumber) {
            minNumber = parseFloat(str[key]);
        }
    }
    let minmaxArr = [minNumber, maxNumber];
    return minmaxArr;
}

