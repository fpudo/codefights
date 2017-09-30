/*
Given the string, check if it is a palindrome.
-> A palindrome is a string that reads the same left-to-right and right-to-left.
Example

For inputString = "aabaa", the output should be
checkPalindrome(inputString) = true;
For inputString = "abac", the output should be
checkPalindrome(inputString) = false;
For inputString = "a", the output should be
checkPalindrome(inputString) = true.
*/

function reverse(s){
    return s.split("").reverse().join("");
}

function checkPalindrome(inputString) {
   if(reverse(inputString) == inputString){
       return true;
   }
    return false;
}
