function removePunc (string) {
        let punctuation = /[\.,?! ]/g;
        let newText = string.replace(punctuation, "");
        return newText;
    }
const palindromes = function (string) {
    const newText = removePunc(string);
    const reversed = newText
                    .split("")
                    .reverse()
                    .join("");
    if (reversed.toLowerCase() === newText.toLowerCase()) {
        return true;
    } else {
        return false;
    }
    
};

// Do not edit below this line
module.exports = palindromes;
