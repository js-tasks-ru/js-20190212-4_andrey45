/**
 * Клонируем объект
 * @param {Object} obj - объект в котором ищем
 * @param {*} value - значение, которе ищем
 * @returns {Object}
 */

let newObj = {
    options: {
        color: "red"
    }
};


function find(obj, value){
    const arrayOfPath = [];
    let findPath;
    const answerArray = [];
    // перебор
    for (let prop in obj) {
        // если объект, то запускаем рекурсию

        if (typeof obj[prop] === "object") {
            if ( find(obj[prop], value) !== null) {
                findPath = prop + '.' + find(obj[prop], value);
                arrayOfPath.push(findPath);
            }

            // запускаем рекурсию, сохраняем результат в переменную

        } else {
            // проверяем взождение, сохраняем результат в переменную
            if (obj[prop] === value) {
                arrayOfPath.push(prop);
                return arrayOfPath;
            }


        }
    }



    // отдаем результат, если неичего не нашли, то возвращем null
    if (arrayOfPath.length !== 0) {
        if (arrayOfPath.length === 1) {
            return arrayOfPath.join();
        } else {
            return arrayOfPath;
        }
        // проверяем на количество найденных результатов и возвращаем строку или массив

    } else {
        return null;
    }
}
