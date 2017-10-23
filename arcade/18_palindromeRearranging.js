// Given a string, find out if its characters can be rearranged to
//form a palindrome.
//
// Example
//
// For inputString = "aabb", the output should be
// palindromeRearranging(inputString) = true.
//
// We can rearrange "aabb" to make "abba", which is a palindrome.


function palindromeRearranging(inputString) {
    let charArray = inputString.split("");
    let letterObj = {};
    for (i = 0; i < charArray.length; i++){
        if(!letterObj.hasOwnProperty(charArray[i])){
            letterObj[charArray[i]] = 1;
        }else{
            letterObj[charArray[i]]++;
        }
    }
    let oddCount = 0;
    for( val in letterObj){
        if(letterObj[val] % 2 != 0){
            oddCount++;
        }
    }
    return oddCount > 1 ? false : true ;
}
