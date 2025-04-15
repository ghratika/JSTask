function toArray(num) {
    return String(num).split('').map(Number);
}
function toNumber(arr) {
    return Number(arr.join(''));
}
console.log(toArray(235));
console.log(toNumber([2,3,5]));