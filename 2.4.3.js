// If you are calculating complex things or execute time - consuming API calls, you sometimes want to cache the results.In this case we want you to create a function wrapper,
// which takes a function and caches its results depending on the arguments, that were applied to the function.

function cache(func) {
    var cache_arr = {};
    return function() {
      var key = JSON.stringify(arguments);
      if (cache_arr.hasOwnProperty(key)) {
        cache_arr[key] = func.apply(null, arguments);
      }
      return cache_arr[key];
    };
}