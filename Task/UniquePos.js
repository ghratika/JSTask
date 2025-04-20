function uniqueArr(arr){
    var arr1 = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0 && !arr1.includes(arr[i])) {
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(uniqueArr([-5,1,-7,-5,-2,3,3,-5,-1,-1]));