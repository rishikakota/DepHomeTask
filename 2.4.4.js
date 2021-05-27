// Your task is to create a compose function to carry out this task,
// which will be passed two functions or lambdas.Ruby functions will be passed,
// and should return, either a proc or a lambda.Remember that the resulting composed function may be passed multiple arguments!



function compose(f, g) {
  // Compose the two functions here!
  return function(...args){
    return f(g(...args));
  }
}