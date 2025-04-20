function isSubset(arr1, arr2) {
    return arr1.every(i => arr2.includes(i));
}

console.log(isSubset([1, 2], [1, 2, 3, 4])); 