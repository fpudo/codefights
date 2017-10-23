/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any element appears at least twice in the array, and it should return false if every element is distinct.

Example

For a = [1, 2, 3, 1], the output should be
containsDuplicates(a) = true.

There are two 1s in the given array.

For a = [3, 1], the output should be
containsDuplicates(a) = false.

The given array contains no duplicates.
*/

// My solution

function containsDuplicates(a) {
    let s = a.sort((a,b) => a-b);
    for(i=0; i < s.length -1; i++){
        if(s[i] == s[i + 1]){
            return true;
        }
    }
    return false;
}

// A better solution from: copythuy

containsDuplicates = a => a.length > new Set(a).size
