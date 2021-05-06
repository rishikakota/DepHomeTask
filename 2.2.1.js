//This time we want to write calculations using functions and get the results. Let's have a look at some examples:

//seven(times(five())); // must return 35
//four(plus(nine())); // must return 13
//eight(minus(three())); // must return 5
//six(dividedBy(two())); // must return 3


function calculateResult(x,t){
  if(x == undefined){
    return t;
  }
  else{
    return Math.floor(eval(t+x));
  }
}

function zero(x) {
  let t = "0";
  return calculateResult(x,t);
}
function one(x) {
  let t = "1";
  return calculateResult(x,t);
}
function two(x) {
  let t = "2";
  return calculateResult(x,t);
}
function three(x) {
  let t = "3";
  return calculateResult(x,t);
}
function four(x) {
  let t = "4";
  return calculateResult(x,t);
}
function five(x){
  let t = "5"
  return calculateResult(x,t);
}
function six(x) {
  let t = "6";
  return calculateResult(x,t);
}
function seven(x) {
  let t = "7"
  return calculateResult(x,t);
}
function eight(x) {
  let t = "8";
  return calculateResult(x,t);
}
function nine(x) {
  let t = "9";
  return calculateResult(x,t);
}

function plus(x) {
  return "+"+x;
}
function minus(x) {
  return "-"+x;
}
function times(x) {
  return "*"+x;
}
function dividedBy(x) {
  return "/"+x;
}