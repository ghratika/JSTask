function sliceSum(arr, val){
    var firstN = arr.slice(0, val);
    var sum=0;
    for (let i = 0; i < firstN.length; i++) {
        sum += firstN[i];
    }
    return sum;
}

console.log(sliceSum([1,3,2],2));