// Some people are standing in a row in a park.
// There are trees between them which cannot be moved. Your task is
// to rearrange the people by their heights in a non-descending
// order without moving the trees.
//
// Example
//
// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let people = a.filter((x) => { if(x != -1){ return x; } }).sort((a,b) => { return a - b});
    let row = [];
    for(i = 0; i < a.length; i++){
        row[i] = a[i] != -1 ? people.shift() : a[i];
    }
    return row;
}
