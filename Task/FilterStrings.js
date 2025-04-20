function filter(str) {
    let array = []; 
    
    for (let i = 0; i < str.length; i++) {
        if (/[a-zA-Z]/.test(str[i])) {
            continue;
        }
        else{
            array.push(str[i]);
        }
    }
    
    console.log(array); 
}

const str = [1, 2, 'a', 4];
filter(str);