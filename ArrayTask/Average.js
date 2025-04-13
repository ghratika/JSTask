function avg(arr){
    var sum = arr.reduce((a, b) => a + b, 0);
    return sum % arr.length === 0;
}
console.log(avg([1,3]));