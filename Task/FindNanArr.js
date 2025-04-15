function findNan(arr) {
    return arr.findIndex(el => Number.isNaN(el));
}
console.log(findNan([1, 2, NaN]));