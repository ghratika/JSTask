function code(str) {
    var hack = {
      'a': '4',
      'e': '3',
      'i': '1',
      'o': '0',
      's': '5'
    };
  
    var result = '';
  for (char of str.toLowerCase()) {
    if (hack[char]) {
      result += hack[char];
    } else {
      result += char;
    }
  }

  return result;
  }
  
  console.log(code("Javascript is cool")); 
  