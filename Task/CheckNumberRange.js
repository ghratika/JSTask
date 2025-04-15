function isInRange(value, range) {
    return value >= range.min && value <= range.max;
}

const obj = { min: 0, max: 5 };
console.log(Range(4, obj)); 
console.log(Range(6, obj));
