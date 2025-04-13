function removeSpecialChars(str) {
    return str.replace(/[^a-zA-Z0-9\s]/g, ''); 
}
console.log(removeSpecialChars("The quick brown fox!"))