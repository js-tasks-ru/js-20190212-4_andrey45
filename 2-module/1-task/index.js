"use strict";

/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
/*
Объявляем тестовую переменную
 */

/*
clone
функция клонирования объекта через перебор свойств
 */
function clone(obj) {
    const targetObj = {};
    for (let prop in obj) {
        if ((typeof obj[prop] !== "object") || (obj[prop] === null)) {
            targetObj[prop] = obj[prop];
        } else {
            targetObj[prop] = clone(obj[prop]);
        }
    }
    return targetObj;
}




