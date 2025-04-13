function printBoundaryEle(arr,r,c){
    for(i=0; i<r; i++){
        for(j=0; j<c; j++){
            if(i == 0 || i == r-1 || j == 0 || j == c-1){
                console.log(arr[i][j])
            }
        }
    }
}

const arr = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
    [8, 7, 6, 5]
];

printBoundaryEle(arr, 4, 4);
