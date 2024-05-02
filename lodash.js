//Load the full build.
var _ = require('lodash');

//1.

var dobro = "12345678901234567890";
var lose = "1123456";

const pi = 3.14;

//dobro = "neki novi string"; promijenit će vrijednost jer je varijabla
//pi = 10; izbacit će error jer je konstanta (nepromjenjiva varijabla) --> razlika var i const? *VAŽNO*

var jedinstveniZnakovi = function (password) {
    var mojNiz = [];
    console.log("password.length = " + password.length);
    for (let i = 0; i < password.length; i++) {
        var numToCheck = password.charAt(i);
        //console.log(numToCheck + "is integer = " + isBroj(numToCheck));
        if(!isBroj(numToCheck)) {
            console.log(numToCheck + " nije broj");
            return false;
        }
        if (mojNiz.includes(numToCheck)) {
            console.log(numToCheck + " već postoji u našem nizu.");
            return false;
        } else {
            console.log(numToCheck + " NE postoji u našem nizu.");
            mojNiz.push(numToCheck);
        }
    }
    return true;
};

function isBroj(broj) {
    return !isNaN(broj);
}

function isMoreThan10(password) {
    if (password.length > 10) {
        return true;
    }
    return false;
}

function skratiNa10(password) {
    if (password.length <= 10) return password;
    /*var tmpPassword = "";
    for (let i = 0; i < 10; i++) {
        var charAtIndex = password.charAt(i);
        tmpPassword += charAtIndex;
    }
    return tmpPassword;*/
    return password.substring(0, 10); //brža metoda od if petlje
}

jedinstveniZnakovi(dobro);
console.log("------");
jedinstveniZnakovi(lose);

console.log("Password je ispravan: " + jedinstveniZnakovi(dobro));
console.log("Password je ispravan: " + jedinstveniZnakovi(lose));
console.log("Password ima više od 10 znakova " + isMoreThan10(dobro));
console.log("Password ima više od 10 znakova " + isMoreThan10(lose));
console.log("Password nakon skracivanja: " + skratiNa10(dobro));
console.log("Password nakon skracivanja: " + skratiNa10(lose));