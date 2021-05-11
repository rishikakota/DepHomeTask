// n this case, we want you to extend the built-in Array class with the following methods: 
//square(), cube(), average(), sum(), even() and odd().

// Explanation:

// square() must return a copy of the array, containing all values squared
// cube() must return a copy of the array, containing all values cubed
// average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
// sum() must return the sum of all array values
// even() must return an array of all even numbers
// odd() must return an array of all odd numbers
// Note: the original array must not be changed in any case!

if(!Array.prototype.square){
  Array.prototype.square = function(){
    let arr = this;
    let res = [];
    for(let i=0; i<arr.length; i++){
      res.push(arr[i]*arr[i]);
    }
    return res;
  }
}

if(!Array.prototype.cube){
  Array.prototype.cube = function(){
    let arr = this;
    let res = [];
    for(let i=0; i<arr.length; i++){
      res.push(arr[i]*arr[i]*arr[i]);
    }
    return res;
  }
}

if(!Array.prototype.sum){
  Array.prototype.sum = function(){
    let arr = this;
    let res = 0;
    for(let i=0; i<arr.length; i++){
      res = res+arr[i];
    }
    return res;
  }
}

if(!Array.prototype.average){
  Array.prototype.average = function(){
    let arr = this;
    let res = (arr.sum())/arr.length;
    return res;
  }
}

if(!Array.prototype.even){
  Array.prototype.even = function(){
    let arr = this;
    let res = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i]%2 == 0){
        res.push(arr[i]);
      }
    }
    return res;
  }
}

if(!Array.prototype.odd){
  Array.prototype.odd = function(){
    let arr = this;
    let res = [];
    for(let i=0; i<arr.length; i++){
      if(arr[i]%2 != 0){
        res.push(arr[i]);
      }
    }
    return res;
  }
}




























