// Given an array of integers, find the maximal absolute difference between
// any two of its adjacent elements.
//
// Example
//
// For inputArray = [2, 4, 1, 0], the output should be
// arrayMaximalAdjacentDifference(inputArray) = 3.

function arrayMaximalAdjacentDifference(a) {
    return a.reduce(function(acc, int, idx, a) {
        if(a.length > idx + 1){
         return [...acc, int - a[idx + 1]];
        }else{
         return acc;
        }
    }, []).reduce(function(acc, currentValue){
        console.log(currentValue);
        return Math.max(acc, Math.abs(currentValue));
    });
}
