function societyName(names){
    return names.map(name => name[0]).sort().join('');
}
console.log(societyName(["Adam","Sarah","Malcolm"]));