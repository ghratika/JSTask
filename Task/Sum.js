function sumTwoSmallestNums(arr) {
    arr.sort((n1, n2) => n1 - n2); 
    return arr[0] + arr[1];     
}
console.log(sumTwoSmallestNums([19,5,42,2,77]));