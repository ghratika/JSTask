function Number(num) {
    var left = Math.floor(num / 2);
    var right = num - left;
    return [left, right];
  }
 console.log(Number(4));