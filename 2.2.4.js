//Can you realize a function that returns word count from a given string?

//You have to ensure that spaces in string is a whitespace for real.

function countWords(str) {
  // ...
  
  str = str.trim();
  
  str = str.replace(/\s{1,}/ig," ");
  if(str == ""){
    return 0;
  }
  var arr = str.split(" ");
  return arr.length;
}