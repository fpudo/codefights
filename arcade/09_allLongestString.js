// Given an array of strings, return another array containing
// all of its longest strings.
//
// Example
//
// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(arr) {

    let long = 0;

    for(i = 0; i < arr.length; i++){
        if(long < arr[i].length){
            long = arr[i].length;
        }
    }
    return arr.filter(function(item){
       return item.length == long;
    });
}
