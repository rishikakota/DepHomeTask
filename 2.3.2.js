//Given an input n, write a function always that returns a function which returns n. 

function always(n) {
  return ()=>n;
}