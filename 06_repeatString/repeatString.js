const repeatString = function(string, num) {
    const stringArray = [];
    for (let i = 0; i < num; i++) {
        stringArray.push(string);
    }
    if (num < 0) {
        return "ERROR";
    }
    return stringArray.join("");
};
const string1 = "goodbye";

repeatString(string1, -1);

// Do not edit below this line
module.exports = repeatString;
