function sum(arr){
    var sum = arr.reduce((a,b) => a+Math.abs(b), 0);
    return sum;
}
console.log(sum([2,-1,4,8,10]));