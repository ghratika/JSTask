function uniqueSort(arr){
    var arr1 = [];
    for (i = 0; i < arr.length; i++) {
        if (!arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1.sort();
}
console.log(uniqueSort([1,4,4,4,4,3,2,1,2]));