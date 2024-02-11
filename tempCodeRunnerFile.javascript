// check if the entered value is an alphapet or not in javascript format
//if it's alphabet then print "It is a Alphabet" else "It is Not a Alphabet"

function isAlphabet(str) {
    return /^[a-zA-Z()]+$/.test(str);
}

let userInput = '1';
console.log(`The inputted word is ${userInput}`);

if (isAlphabet(userInput)) {
    console.log("It is a Alphabet");
} else {
    console.log("It is Not a Alphabet");
}