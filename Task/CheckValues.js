function allTruthy(...args){
        return args.every(Boolean);
    
}
console.log(allTruthy(1));