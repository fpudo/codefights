// Find the leftmost digit that occurs in a given string.
//
// Example
//
// For inputString = "var_1__Int", the output should be
// firstDigit(inputString) = '1';
// For inputString = "q2q-q", the output should be
// firstDigit(inputString) = '2';
// For inputString = "0ss", the output should be
// firstDigit(inputString) = '0'.

function firstDigit(str) {
    for(let i = 0; i < str.length; i++){
        if(str[i] == parseInt(str[i])){
            return str[i];
        }
    }
}

// Better Solution

function firstDigit(str){
  return str.match(/\d/)[0];
}
