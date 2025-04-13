function jazzify(arr){
    if(arr.length == 0){
        return [];
    }
    return arr.map(chord => chord.endsWith("7") ? chord : chord + "7");

}
console.log(jazzify(["G","F","C"]));
console.log(jazzify([]));