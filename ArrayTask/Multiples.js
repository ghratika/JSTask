function arrayOfMultiples(num,length) {
    var res = [];
    for (let i = 1; i <= length; i++) {
        res.push(num * i);
    }
    return res;
}
console.log(arrayOfMultiples(7,5));