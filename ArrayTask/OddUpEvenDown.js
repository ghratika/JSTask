function oddUpEvenDown(arr,n) {
    for (i = 0; i < n; i++) {
        arr = arr.map(num => {
            if (num % 2 === 0) {
                return num - 2; 
            } else {
                return num + 2; 
            }
        });
    }
    return arr;

}

console.log(oddUpEvenDown([3,4,9],3)); 
