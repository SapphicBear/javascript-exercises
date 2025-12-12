const removeFromArray = function(array, num, num2, num3, num4) {
    const uniqueArray = [];
    for (let i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    const index = uniqueArray.indexOf(num);
        if (index > -1) {
            uniqueArray.splice(index, 1);
    }
    if (num2 !== undefined) {
        const index2 = uniqueArray.indexOf(num2);
        if (index2 > -1) {
            uniqueArray.splice(index2, 1);
        }
    }
    if (num3 !== undefined) {
        const index3 = uniqueArray.indexOf(num3);
        if (index3 > -1) {
            uniqueArray.splice(index3, 1);
        }
    }
    if (num4 !== undefined) {
        const index4 = uniqueArray.indexOf(num4);
        if (index4 > -1) {
            uniqueArray.splice(index4, 1);
        }
    }
    return uniqueArray;
};
const array = [1, 2, 3];
removeFromArray(array, "1", 3);

// Do not edit below this line
module.exports = removeFromArray;
