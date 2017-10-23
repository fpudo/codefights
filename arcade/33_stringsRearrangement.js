// Given an array of equal-length strings, check if it is possible
// to rearrange the strings in such a way that after the rearrangement
// the strings at consecutive positions would differ by exactly one character.
//
// Example
//
// For inputArray = ["aba", "bbb", "bab"], the output should be
// stringsRearrangement(inputArray) = false;
//
// All rearrangements don't satisfy the description condition.
//
// For inputArray = ["ab", "bb", "aa"], the output should be
// stringsRearrangement(inputArray) = true.
//
// Strings can be rearranged in the following way: "aa", "ab", "bb".

// Code from Youtube Channel : Javascript The Game

function stringsRearrangement(inputArray) {

        function differentByOne(str1, str2){
                let mismatches = 0;
                for(let i = 0; i < str1.length; i++){
                        if(str1[i] != str2[i]) mismatches++
                }
                return mismatches === 1;
        }

        function getPermutations(arr){
                const fullLength = arr.length;
                let sequence = [];
                let permutations = [];

                function permute(a){
                        for( let i = 0; i < a.length; i++){
                           let str = a[i];
                           sequence.push(str);
                           if(sequence.length == fullLength){
                                permutations.push([...sequence]);
                           }else{
                                let remaining = [...a.slice(0,i), ...a.slice(i + 1)];
                                permute(remaining);
                           }
                        sequence.pop();
                        }
                }
                permute(arr);
                return permutations;
        }

        let sequences = getPermutations(inputArray);

        for(let sequence of sequences){
                let possible = true
                for(let i = 1; i < sequence.length; i++){
                        let thisOne = sequence[i];
                        let previousOne = sequence[i - 1];
                        if(!differentByOne(thisOne, previousOne)){
                                possible = false;
                                break;
                        }
                }
                if(possible) return true;
        }
        return false;
}


// TODO: Study about Hamiltonian Path and improve the code
