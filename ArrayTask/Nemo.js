function findNemo(str){
    var s = str.split(" ");
    var i = s.indexOf("Nemo");

  if (i !== -1) {
    return `I found Nemo at ${i + 1}!`;
  } else {
    return "I can't find Nemo :(";
  }
}
console.log(findNemo("I am finding Nemo !"));