'use strict'
/**
 * Power
 * @param {number} m base
 * @param {number} n index
 * @returns {number}
 */

//
// Проверка вводимых данных на предмет соответствия типу "Число"
//
function isNumeric(x) {
    return !isNaN(parseFloat(x)) && isFinite(x);
}

//
// Возведение числа m в степень n
//
function pow (m, n) {
    if (n != 1) { // пока n != 1, сводить вычисление pow(x,n) к pow(x,n-1)
        return m * pow(m, n - 1);
    } else {
        return m;
    }
}