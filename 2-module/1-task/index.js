/**
 * Клонируем объект
 * @param {Object} obj - клонируем объект
 * @returns {Object}
 */
/*
Объявляем тестовую переменную
 */
let obj = {
    test: 1,
    test22: 2
};

/*
clone
функция клонирования объекта через перебор свойств
 */
function clone (obj) {
    let target = {};
    for (let prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            target[prop] = obj[prop];
        }
    }
    return target;
}


