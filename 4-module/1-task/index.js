'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {
    let listArray = [];
    friends.forEach(function (item, i, friends) {
        let listName = "";
        for (let key in friends[i]) {
            listName = listName + " " + friends[i][key];
        }
        listArray.push(listName);
    });



    let ul = document.createElement("ul");
    for (let key in listArray) {

        let li = document.createElement("li");
        li.appendChild(document.createTextNode(listArray[key]));
        ul.appendChild(li);
    }

    document.body.appendChild(ul);

}
