const reverseString = function(string) {
    const array = string.split('');
    reversed = array.reverse();
    return reversed.join("");
};
reverseString('');

// Do not edit below this line
module.exports = reverseString;
