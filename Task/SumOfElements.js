function numbersSum(arr){
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            sum += arr[i];
        }
    }
    return sum;
}
console.log(numbersSum([1,2,"13","4", "645"]));