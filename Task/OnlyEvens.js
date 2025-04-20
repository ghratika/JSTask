function even(arr){
    res = [];
    for(i=0;i<arr.length;i++){
        if(i % 2==0 && arr[i] % 2 == 0){
            res.push(arr[i]);
        }
    }
    console.log(res);
}
arr = [1,3,2,6,4,8];
even(arr);