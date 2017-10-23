// Given two cells on the standard chess board,
// determine whether they have the same color or not.
//
// Example
//
// For cell1 = "A1" and cell2 = "C3", the output should be
// chessBoardCellColor(cell1, cell2) = true.
//
// For cell1 = "A1" and cell2 = "H3", the output should be
// chessBoardCellColor(cell1, cell2) = false.

function chessBoardCellColor(cell1, cell2) {
    let board = {
        "A":1,
        "B":2,
        "C":3,
        "D":4,
        "E":5,
        "F":6,
        "G":7,
        "H":8};
    let c1 = board[cell1[0]] + parseInt(cell1[1]);
    let c2 = board[cell2[0]] + parseInt(cell2[1]);
    return c1 % 2 == c2 % 2;
}
