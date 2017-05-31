// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.


function destroyer(arr) {
  // Remove all the values
  console.log('-------------------');
  var ar1 = arguments[0];
  var ar2  = arguments[1];
  var args = Array.prototype.slice.call(arguments).splice(1);
  console.log('args is '+args);
  
  console.log('ar1 is '+ar1);
  console.log('ar2 is '+ar2);
  
  
  
  
  return arr.filter(function(val){
    
        return args.indexOf(val) ===-1;
    
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);