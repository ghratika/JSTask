function reverseArr(...nums) {
    return nums.toString().split('').reverse().map(Number);
}
console.log(reverseArr(1485979));