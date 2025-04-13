function isSubset(arr1, arr2) {
    return arr1.every(item => arr2.includes(item));
}

console.log(isSubset([1, 2], [1, 2, 3, 4])); 