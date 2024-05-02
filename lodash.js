//Load the full build.
var _ = require('lodash');

//1.

var dobro = "a1234567890";
var lose = "1123456";
var jedinstveniZnakovi = function (password) {
    for (let i = 0; i <= password.length; i++) {
        var numToCheck = password.charAt(i);
        //console.log(numToCheck + "is integer = " + isBroj(numToCheck));
        if(!isBroj(numToCheck)) {
            console.log(numToCheck + " nije broj");
            break;
        }
    }
};

function isBroj(broj) {
    return !isNaN(broj);
}

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);