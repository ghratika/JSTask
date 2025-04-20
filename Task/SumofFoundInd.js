function sumOfIndexes(arr, n) {
    var sum = 0;
    arr.forEach((el, i) => {
        if (el === n) {
            sum += i;
        }
    });
    return sum;
}

console.log(sumOfIndexes([0,3,3,0,0,3], 3)); 
