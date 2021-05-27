//A simple implementation of compose, could work as follows:
//compose function from 2.4.4

const addOne = (a) => a + 1
const multTwo = (b) => b * 2

function compose(...args) {
  return function(arg){
    var result = arg;
    args.reverse().forEach(func=>{result=func(result)})
    return result;
  }
}