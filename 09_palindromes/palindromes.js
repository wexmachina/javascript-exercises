const palindromes = function (string) {
    if ((string.split("").reverse().join("").replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ").toLowerCase().replaceAll(' ', '')) == string.replaceAll(' ','').replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ").toLowerCase())
     return true;
    else return false;
};

// Do not edit below this line
module.exports = palindromes;
