function largest(arr){
    return arr.map(subArr => Math.max(...subArr));    
}
console.log(largest([[4,2,7,1],[20,70,40,90],[1,2,0]]))