function mirror(arr) {
    return arr.concat(arr.slice(0, -1).reverse());
}

console.log(mirror([0, 2, 4, 6]));