function Tuck(array1, array2){
    let mid = Math.floor(array1.length / 2);
     let res = [
         ...array1.slice(0, mid),
         ...array2,
         ...array1.slice(mid)
     ];
     console.log(res);
 }
 arr1 = [1,4];
 arr2 = [2,3]
 Tuck(arr1, arr2);