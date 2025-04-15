function capMe(arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());
}
console.log(capMe(["mavis","senaida","letty"]))