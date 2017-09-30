/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
adjacentElementsProduct(inputArray) = 21.

7 and 3 produce the largest product.
*/

function adjacentElementsProduct(inputArray) {
    return inputArray.reduce(function(acc, int, idx, inputArray) {
        if(inputArray.length > idx + 1){
         return [...acc, int * inputArray[idx + 1]];
        }else{
         return acc;
        }
    }, []).reduce(function(acc, currentValue){
        return Math.max(acc, currentValue);
    });
}
