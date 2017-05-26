/* Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Remember to use Read-Search-Ask if you get stuck. Write your own code. */


function factorialize(num) {
  var vr=1;
  
  for(var i=1;i<=num;i++){
    vr=vr*i;
  }
  
  return vr;
}

factorialize(5);
