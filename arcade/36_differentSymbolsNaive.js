// Given a string, find the number of different characters in it.
//
// Example
//
// For s = "cabca", the output should be
// differentSymbolsNaive(s) = 3.
//
// There are 3 different characters a, b and c.

// My Solution
function differentSymbolsNaive(s) {
    s = s.split("");
    let letters = [];
    for(let i =0 ; i < s.length; i++){
        if(!letters.includes(s[i])){
            letters.push(s[i]);
        }
    }
    return letters.length;
}

// Better Solution
function differentSymbolsNaive(s) {
    return new Set(s).size;
}
