function isSpecialArray(arr){
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 && arr[i] % 2 !== 0) return false; 
        if (i % 2 !== 0 && arr[i] % 2 !== 1) return false; 
      return true;
    }
}
console.log(isSpecialArray([2,7,4,9,6,1,6,3]));