function printDiagonalFromRight(arr, r, c) {
    if (r !== c) {
        console.log("Matrix is not square.");
        return;
    }

    let i = 0;
    let j = c - 1;

    while (i < r && j >= 0) {
        console.log(arr[i][j]);
        i++; 
        j--; 
    }
}

const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

printDiagonalFromRight(arr, 4, 4);
