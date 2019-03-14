let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
};

let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {
    let current = this.from;
    let last = this.to;
    let thisDate = "";
    return {
        next() {
            if (current <= last) {
                current.setDate(current.getDate() + 1);
                if ((current.getDate() <= 9) && (current.getDate() <= 9)){
                    thisDate = "0" + current.getDate();
                } else if (current.getDate() >= 10) {
                    thisDate = String(current.getDate());
                }
                if ((current.getDay() === 0) || (current.getDay() === 6)){
                    thisDate = "[" + "0" + current.getDate() + "]";
                }

                return {
                    done: false,
                    value: thisDate
                };
            } else {
                return {
                    done: true
                };
            }
        }
    }
};

for (let day of calendar) {
    console.log(day);
}







/**********************************************************************************************/
// function buildFilters() {
//     let string = `status:sample_received,status:on_hold,status:sent_to_another,pidor:sent_to_another`;
//     let res = string.split(',');
//     console.log(res);
//     let newString = '';
//     for (let i=1; i<=res.length-1; i++) {
//         if(res[i].charAt(0)==="s" && (res[i].charAt(1)==="t" && (res[i].charAt(2)==="a" && (res[i].charAt(3)==="t" && (res[i].charAt(5)==="u" (res[i].charAt(6)==="s") {
//             res[i] = "OR" + res[i];
//         }
//         res[i] = "AND" + res[i];
//     }
//     newString = res.join();
//
//     console.log(newString);
//     return newString;
// }
//
//
// buildFilters();
/**********************************************************************************************/