function Adjectives(adjectives){
    let count = 0;
    const values = Object.values(adjectives);
    
    for (let i = 0; i < values.length; i++) {
        count++;
    }

    console.log(count);
}
const obj = {a:"moron"};
Adjectives(obj)