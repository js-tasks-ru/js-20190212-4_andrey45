/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
"use strict";
let data = [
    {
        "balance": "$1,825.65",
        "picture": "http://placehold.it/32x32",
        "age": 21,
        "name": "Golden Branch",
        "gender": "male",
        "greeting": "Hello, Golden Branch! You have 7 unread messages.",
        "favoriteFruit": "banana"
    } ];
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
