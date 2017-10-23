// Given a rectangular matrix of characters, add a border of asterisks(*) to it.
//
// Example
//
// For
//
// picture = ["abc",
//            "ded"]
// the output should be
//
// addBorder(picture) = ["*****",
//                       "*abc*",
//                       "*ded*",
//                       "*****"]

function addBorder(picture) {
    picture = picture.map(i => "*" + i + "*");
    let wallSize = picture[0].length;
    let wall = "*".repeat(wallSize);
    picture.unshift(wall);
    picture.push(wall);
    return picture;
}
