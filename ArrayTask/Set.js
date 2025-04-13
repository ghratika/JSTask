function set(arr){
    var res = [];
    arr = arr.sort();
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1]) {
            res.push(arr[i]);  
        }
    }
    return res;
}
console.log(set([1,5,3,5,5,5]));