function updateArray(arr, n) {
    arr.push(n);      
    arr.shift();        
    return arr;         
  }
const res = updateArray([1, 2, 3, 4], 5);
console.log(res);  

  