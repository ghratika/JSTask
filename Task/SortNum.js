function sortNo(arr){
    if (!Array.isArray(arr) || arr.length === 0) 
        return [];

    var res = [...arr];
    for (let i = 0; i < res.length - 1; i++) {
        for (let j = i + 1; j < res.length; j++) {
            if (res[i] > res[j]) {
                [res[i], res[j]] = [res[j], res[i]];
            }
        }
    }
    return res;
}
console.log(sortNo([1,2,10,50,5]));