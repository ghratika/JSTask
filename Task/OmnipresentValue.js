function isOmnipresent(arr, val){
    for (i = 0; i < arr.length; i++) {
        if (!arr[i].includes(val)) {
            return false;
        }
    }
    return true;
}
console.log(isOmnipresent([[1,1],[1,3],[5,1],[6,1]], 1));