/*
In the popular Minesweeper game you have a board with some mines and
those cells that don't contain a mine have a number in it that indicates
the total number of mines in the neighboring cells. Starting off with some
arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
*/

// Short Solution

var dirs = [ { r: -1, c: -1 },
             { r: -1, c:  0 },
             { r: -1, c:  1 },
             { r:  0, c:  1 },
             { r:  0, c: -1 },
             { r:  1, c: -1 },
             { r:  1, c:  0 },
             { r:  1, c:  1 }];

function minesweeper(matrix) {
    return matrix.map((a,r) => a.map((_,c) => dirs.reduce((p,v) => p+=(matrix[r+v.r]||[])[c+v.c]|0, 0)))
}

// My solution

function minesweeper(matrix) {
    let getVal = function(y,x) {
        if(y < 0 || y >= matrix.length ||
          x < 0 || x >= matrix[0].length) {
            return false;
        } else{
            return matrix[y][x];
        }
    }
    let sumVals = function(y, x) {
        let sum = 0;
        for (dx = -1; dx <= 1; dx++ ){
            for(dy = -1; dy <= 1; dy++) {
                if (dx == 0 && dy == 0) continue;
                if(getVal(y + dy, x + dx)) sum++;
            }
        }
        return sum;
    }
    let res = [];
    for (i = 0; i < matrix.length; i++) {
        let line = [];
        for (j = 0 ; j < matrix[i].length; j++){
            line.push(sumVals(i, j));
        }
        res.push(line);
    }
    return res;
}

// Another Solution

function minesweeper(matrix) {
    var mineNum = [];
    for (var row = 0; row < matrix.length; row++) {
        mineNum[row] = [];
        for (var col = 0; col < matrix[row].length; col++) {
            var cellNum = 0;

            var startRow = (row - 1 >= 0) ? row - 1 : row;
            var endRow = (row + 1 < matrix.length) ? row + 1 : row;

            for (var i = startRow; i <= endRow; i++) {
                var startCol = (col - 1 >= 0) ? col - 1 : col;
                var endCol = (col + 1 < matrix[row].length) ? col + 1 : col;

                for (var j = startCol; j <= endCol; j++) {
                    if (matrix[i][j] && !(i == row && j == col)) {
                        cellNum++;
                    }
                }
            }

            mineNum[row][col] = cellNum;
        }

    }

    return mineNum;
}
