function countTrue(arr){
    var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
            count++;
        }
    }
    return count;
}
console.log(countTrue([true,false,false,true,false]));