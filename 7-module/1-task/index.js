'use strict';

/**
 * Функция декоратор makeLogging(fn, log), для функции fn
 * возвращающий обёртку, которая при каждом вызове добавляет её аргументы в массив log.
 * @param {Function} fn - декорируемая функция
 * @param {Array} log - массив для записи логов
 * @return {Function}
 */
function work(a, b) {
    return a + b;
}

function makeLogging(fn, log) {
    function fn() {
        for (let i=0; i<arguments.length; i++) {
            return log.push(arguments[i]);
        }
    }
}

let log = [];

let works = makeLogging(work, log);
works(1, 2); // -> 3

alert(log[0][0] === 1, log[0][1] === 2);
