//We want to create a function that will add numbers together when called in succession.

function add(n) {
    var fn = function(x) {
      return add(n + x);
    };
    
    fn.valueOf = function() {
      return n;
    };
    
    return fn;
}