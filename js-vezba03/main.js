showMessage();

function showMessage() {
    console.log('Fanum Porez!');
}

showMessage();
showMessage();
showMessage();

function showMessageToUser(firstName, lastName) {
    console.log(`De si, $(firstName) $(lastName)`);
}
showMessageToUser('Pepsi', 'Max');
showMessageToUser('Skibidi', 'Rizz');
showMessageToUser('Ohio');

function calculateSum(firstOperand, secondOperand) {
    return firstOperand + secondOperand;
}
let result = calculateSum(10, 30);
console.log(result);
result = calculateSum(5, 15);
console.log(result);

let newShowMessage = showMessage;
console.log('................');
console.log(newShowMessage);
showMessage();
newShowMessage();

const calcAge = function(yearOfBirth, yearOfDate) {
    return yearOfDate - yearOfBirth;
}
console.log(calcAge(2004, 2030));
console.log(calcAge(2004, 2050));

function yesMessage() {
    console.log('Vi ste punoletna osoba.');
}

function noMessage() {
    console.log('Vi niste punoletna osoba.');
}

function isAdult(age, yes, no) {
    if (age >= 18) {
        yes();
    } else {
        no();
    }
}

isAdult(24, yesMessage, noMessage);
isAdult(14, yesMessage, noMessage);

isAdult(22, function() {console.log('Punoletna osoba.')}, function() {console.log('Maloletna osoba')});

let showMsg = (fname, lname) => console.log(`Pozdrav, ${fname} ${lname}`);
console.log('_________');
showMsg('P', 'Diddy');

(function() {
    console.log('IIFE');
})();

let helloMsg = new Function('fname', 'console.log(`Pozdrav ${fname}`)')