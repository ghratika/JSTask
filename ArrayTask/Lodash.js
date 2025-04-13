function compact(arr) {
    return arr.filter(el => el !== false && el !== 0 && el !== "" && el !== null && el !== undefined);
}

console.log(compact([0, 1, false, 2, "", 3])); 