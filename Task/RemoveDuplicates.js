function removeDups(arr){
    var newarr = [];
    for(i=0;i<arr.length;i++){
        if(!newarr.includes(arr[i])){
            newarr.push(arr[i]);
        }
    }
    return newarr;
}
console.log(removeDups([1,0,1,0]));
console.log(removeDups(["John","Taylor","John"]));