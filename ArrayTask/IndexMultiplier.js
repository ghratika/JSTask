function indexMultiplier(arr){
    var res = 0;
    for(i=0; i<arr.length; i++){
        res += arr[i] * i;
    }
    return res;
}
console.log(indexMultiplier([1,2,3,4,5]))