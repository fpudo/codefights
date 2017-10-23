// Given a string, replace each its character by the next one in
// the English alphabet (z would be replaced by a).
//
// Example
//
// For inputString = "crazy", the output should be
// alphabeticShift(inputString) = "dsbaz".

function alphabeticShift(inputString) {
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    let str = inputString.split("");

    for(i = 0; i < str.length; i++){
        let idx = 0;
        if(str[i] !== "z"){
            idx = alphabet.indexOf(str[i]) + 1;
        }
        str[i] = alphabet[idx];
    }

    return str.join("");
}
