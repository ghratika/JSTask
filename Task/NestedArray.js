function NestedArr(arr1, arr2){
    min1 = Math.min(...arr1);
    min2 = Math.min(...arr2);
    max1 = Math.max(...arr1);
    max2 = Math.max(...arr2);
    if(min1 > min2 && max1 < max2){
        return true;
    }
    else{
        return false;
    }

}
arr1 = [1,2,3,4];
arr2 = [0,6];
console.log(NestedArr(arr1,arr2));