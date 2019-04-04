'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */

let log = [];

function makeLogging(fn, log) {
    return function() {
        let results = log.push(this, arguments);
        return results;
    }
}

function work(a, b) {
    return a + b;
}

work = makeLogging(work, log);
console.log(work(1, 2)); // -> 3
console.log(work(1, 3));

console.log(log);
