function allIdentical(arr) {
    return arr.every(val => val === arr[0]);
  }
console.log(allIdentical(["@","@","@","e"]));