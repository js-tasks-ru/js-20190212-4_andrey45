/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
"use strict";


function showSalary(data, age) {
    let userListArray = [];
    let userList = "";
    let userNameSalary = '';
    for (let i=0; i<=data.length-1; i++) {
        if (data[i].age<=age){
            userNameSalary = data[i].name + ", " + data[i].balance;
            userListArray.push(userNameSalary);
        }
    }
    userList = userListArray.join('\n');

    return userList;
}
