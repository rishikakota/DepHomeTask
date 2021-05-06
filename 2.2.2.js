//You are going to be given a word. 
//Your job is to return the middle character of the word. 
//If the word's length is odd, return the middle character. 
//If the word's length is even, return the middle 2 characters.

function getMiddle(word)
{
  //Code goes here!
  
  if(word.length%2 == 0){
    return word.substr((word.length/2)-1,2)
  }
  else{
    return word.charAt(Math.floor(word.length/2));
  }
}
